import { HttpMethod, HttpRequest, HttpResponse } from './http-request';
import {
  getSchema,
  isValid,
  makeAlwaysValidValidator,
  makeValidator,
} from '../lib/json-schema-validator';

import { ApiEndpointSpecification } from './endpoints/types';
import { AuthHelper } from '../types/auth-helper-types';
import { GenericNotOkResponse } from './types';
import { config } from '../app-config';

let apiRequestsAllowed = true;

const isApiRequestAllowed = (): boolean => apiRequestsAllowed;
export const setApiRequestsAllowed = (flag: boolean): void => {
  apiRequestsAllowed = flag;
};

export type ApiResponse<TOk, TNotOk> =
  | {
      ok: true;
      httpStatusCode: number;
      response: TOk;
    }
  | {
      ok: false;
      httpStatusCode: number;
      response: TNotOk;
    };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const makeActualApiRequestFn = <
  TRequestParams,
  TRequestBody,
  TOkResponse,
  TApiEndpointSpecification extends ApiEndpointSpecification = ApiEndpointSpecification,
>(
  apiEndpointSpecification: TApiEndpointSpecification,
) => {
  const okResponseValidator = makeValidator<TOkResponse>(
    apiEndpointSpecification.okResponseSchemaName,
  );
  const notOkResponseValidator = makeValidator<GenericNotOkResponse>(
    apiEndpointSpecification.notOkResponseSchemaName,
  );
  const requestParamsValidator = apiEndpointSpecification.requestParamsSchemaName
    ? makeValidator<TRequestParams>(apiEndpointSpecification.requestParamsSchemaName)
    : makeAlwaysValidValidator<TRequestParams>();

  const requestParamsSchema = apiEndpointSpecification.requestParamsSchemaName
    ? getSchema(apiEndpointSpecification.requestParamsSchemaName)
    : { properties: {} };

  const requestParamKeys = Object.keys(requestParamsSchema.properties || {});

  const getRequestParams = (request: TRequestParams & TRequestBody): TRequestParams =>
    //@ts-ignore
    Object.keys(request).reduce((acc, key) => {
      if (requestParamKeys.includes(key)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (acc as any)[key] = (request as any)[key];
      }
      return acc;
    }, {} as TRequestParams);

  const getRequestBody = (request: TRequestParams & TRequestBody): TRequestBody | undefined => {
    //@ts-ignore
    const requestBody = Object.keys(request).reduce((acc: any, key: any) => {
      if (!requestParamKeys.includes(key)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (acc as any)[key] = (request as any)[key];
      }
      return acc;
    }, {} as TRequestBody);

    if (Object.keys(requestBody).length === 0) {
      return undefined;
    }

    return requestBody;
  };

  const getUrl = (requestParams: TRequestParams): string => {
    //@ts-ignore
    const allParamKeys = Object.keys(requestParams);
    const pathParamKeys = allParamKeys.filter((key) =>
      apiEndpointSpecification.url.includes(`:${key}`),
    );
    const queryParamKeys = allParamKeys.filter(
      (key) => !apiEndpointSpecification.url.includes(`:${key}`),
    );

    const path = pathParamKeys.reduce((acc, key) => {
      const re = new RegExp(`(:${key})(\\/|$)`);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return acc.replace(re, `${encodeURIComponent((requestParams as any)[key])}$2`);
    }, apiEndpointSpecification.url);

    const queryParamString =
      queryParamKeys.length > 0
        ? `?${queryParamKeys
            .map((key) =>
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (requestParams as any)[key] !== undefined
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  `${key}=${encodeURIComponent((requestParams as any)[key])}`
                : '',
            )
            .filter((param) => param.length > 0)
            .join('&')}`
        : '';

    return `${path}${queryParamString}`;
  };

  return async (
    request: TRequestParams & TRequestBody,
    opts: { authHelper: AuthHelper | undefined },
  ): Promise<ApiResponse<TOkResponse, GenericNotOkResponse>> => {
    // This is to prevent requests from being sent out after tests have completed.
    if (process.env.NODE_ENV === 'test' && !isApiRequestAllowed()) {
      return {
        ok: false,
        httpStatusCode: -1,
        response: {} as GenericNotOkResponse,
      };
    }

    if (apiEndpointSpecification.authenticated && !opts.authHelper) {
      // eslint-disable-next-line no-console
      console.warn('API required authentication but no authHelper was specified');
    }

    const requestParams = getRequestParams(request);

    const requestParamsValidationResult = isValid<TRequestParams>(
      requestParamsValidator,
      requestParams,
    );
    if (!requestParamsValidationResult.valid) {
      throw new Error(
        `[Client] Invalid request params received from caller (${JSON.stringify(
          requestParams,
        )}) for ${apiEndpointSpecification.url} using schema ${
          apiEndpointSpecification.requestParamsSchemaName
        }: ${requestParamsValidationResult.reasons.join(', ')}`,
      );
    }

    const requestBody = getRequestBody(request);
    const url = getUrl(requestParams);

    const getHttpRequest = (): Promise<HttpResponse> => {
      switch (apiEndpointSpecification.method) {
        case HttpMethod.POST:
          return HttpRequest.post({
            resource: url,
            signal: opts.authHelper?.signal,
            body: requestBody,
            version: apiEndpointSpecification.version,
          });
        case HttpMethod.PUT:
          return HttpRequest.put({
            resource: url,
            signal: opts.authHelper?.signal,
            body: requestBody,
            version: apiEndpointSpecification.version,
          });
        case HttpMethod.DELETE:
          return HttpRequest.delete({
            resource: url,
            signal: opts.authHelper?.signal,
            body: requestBody,
            version: apiEndpointSpecification.version,
          });
        case HttpMethod.GET:
        default:
          return HttpRequest.get({
            resource: url,
            signal: opts.authHelper?.signal,
            version: apiEndpointSpecification.version,
          });
      }
    };
    const httpRequest = getHttpRequest();

    const httpResponse = await (opts.authHelper ? opts.authHelper.send(httpRequest) : httpRequest);
    // if (httpResponse.status !== 200) {
    //     console.log(httpResponse.status);
    //     console.log(url);
    //     console.log(requestBody);
    //     console.log(httpResponse);
    // }

    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      const validationResult = isValid<TOkResponse>(okResponseValidator, httpResponse.response);

      if (!validationResult.valid) {
        console.log(
          `[Client] Invalid OK JSON response received from server (${
            httpResponse.status
          } ${JSON.stringify(httpResponse.response)}) for ${
            apiEndpointSpecification.url
          } using schema ${
            apiEndpointSpecification.okResponseSchemaName
          }: ${validationResult.reasons.join(', ')}`,
        );

        return {
          ok: false,
          httpStatusCode: httpResponse.status,
          response: {
            errorCode: -71,
            errorDescription:
              'Requested operation cannot be performed, please contact your administrator.',
          },
        };
      }

      return {
        ok: true,
        httpStatusCode: httpResponse.status,
        response: validationResult.value,
      };
    }

    if (httpResponse.status === 401) {
      if (opts.authHelper) {
        opts.authHelper.onUserNotAuthenticated();
      }
    }

    const validationResult = isValid<GenericNotOkResponse>(
      notOkResponseValidator,
      httpResponse.response,
    );
    if (!validationResult.valid) {
      console.log(
        `[Client] Invalid Not OK JSON response received from server (${
          httpResponse.status
        } ${JSON.stringify(httpResponse.response)}) for ${
          apiEndpointSpecification.url
        } using schema ${
          apiEndpointSpecification.notOkResponseSchemaName
        }: ${validationResult.reasons.join(', ')}`,
      );

      return {
        ok: false,
        httpStatusCode: httpResponse.status,
        response: {
          errorCode: -72,
          errorDescription:
            'Requested operation cannot be performed, please contact your administrator.',
        },
      };
    }
    return {
      ok: false,
      httpStatusCode: httpResponse.status,
      response: validationResult.value,
    };
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const makeApiRequestFn = <
  TRequestParams,
  TRequestBody,
  TOkResponse,
  TApiEndpointSpecification extends ApiEndpointSpecification = ApiEndpointSpecification,
>(
  apiEndpointSpecification: TApiEndpointSpecification,
  placeholderFn?: (
    request: TRequestParams & TRequestBody,
  ) => Promise<ApiResponse<TOkResponse, GenericNotOkResponse>>,
) => {
  if (!placeholderFn || process.env.NODE_ENV === 'test' || config.apiUrl.length === 0) {
    return makeActualApiRequestFn<
      TRequestParams,
      TRequestBody,
      TOkResponse,
      TApiEndpointSpecification
    >(apiEndpointSpecification);
  }

  return (
    request: TRequestParams & TRequestBody,
  ): Promise<ApiResponse<TOkResponse, GenericNotOkResponse>> => {
    // eslint-disable-next-line no-console
    console.warn(
      `Using placeholder (client-side) API response data for ${apiEndpointSpecification.method}: ${apiEndpointSpecification.url} instead of making an actual API call.`,
    );

    return placeholderFn(request);
  };
};
