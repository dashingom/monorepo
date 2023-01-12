import { OutgoingHttpHeaders } from 'http';
import { config } from '../app-config';
export enum HttpMethod {
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  GET = 'GET',
  DELETE = 'DELETE',
}

export type BaseHttpResponse<T> = {
  status: number;
  response: T;
};

type HttpRequestParams<TBody = unknown> =
  | {
      method: 'GET';
    }
  | {
      method: 'DELETE';
      body: TBody;
    }
  | {
      method: 'POST';
      body: TBody;
    }
  | {
      method: 'PUT';
      body: TBody;
    };

type HttpRequestBase = {
  resource: string;
};

type HttpRequestOptions = {
  responseType?: 'text' | 'json';
  headers?: OutgoingHttpHeaders;
  signal?: any;
  prependApiUrl?: boolean;
  version?: number;
};

export type HttpResponse<TResponse = unknown> = {
  status: number;
  response: TResponse;
};

const request = async <TBody = unknown, TResponse = unknown>(
  args: HttpRequestParams & HttpRequestBase & HttpRequestOptions,
): Promise<{ status: number; response: TResponse }> => {
  // For most usages of HttpRequest we'll want to prepend the correct API hostname and
  // base path. But to allow for pulling content from other locations (not the API), it's
  // possible to disable the prepend by passing in `prependApiUrl` as false.
  const resource =
    args.prependApiUrl === false ? args.resource : `${config.apiUrl}${args.resource}`;

  const req = fetch(resource, {
    method: args.method,
    credentials: 'include',
    signal: args.signal,
    headers: {
      ...('body' in args
        ? {
            'Content-Type': 'application/json',
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
            Version: args.version !== undefined ? args.version.toFixed(1) : `${config.apiVersion}`,
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
          }
        : {
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
            Version: args.version !== undefined ? args.version.toFixed(1) : `${config.apiVersion}`,
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
          }),
      ...args.headers,
    },
    ...('body' in args
      ? {
          body: JSON.stringify(args.body),
        }
      : {}),
  });

  try {
    const response = await req;
    return {
      status: response.status,
      response: args.responseType === 'text' ? await response.text() : await response.json(),
    };
  } catch (error) {
    if (process.env.NODE_ENV !== 'test') {
      console.log('HttpRequest: request', { resource, req, error });
    }

    return {
      status: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      response: (error as Error).message as any,
    };
  }
};

export const HttpRequest = {
  request,

  post: <TBody = {}>(
    args: {
      resource: string;
      body: TBody;
      version?: number;
    } & HttpRequestOptions,
  ): Promise<HttpResponse> => request<TBody>({ method: 'POST', ...args }),

  put: <TBody = {}>(
    args: { resource: string; body: TBody; version?: number } & HttpRequestOptions,
  ): Promise<HttpResponse> => request<TBody>({ method: 'PUT', ...args }),

  get: <TResponse>(
    args: { resource: string; version?: number } & HttpRequestOptions,
  ): Promise<HttpResponse<TResponse>> => request<never, TResponse>({ method: 'GET', ...args }),

  delete: <TBody = {}>(
    args: { resource: string; body: TBody; version?: number } & HttpRequestOptions,
  ): Promise<HttpResponse> => request<TBody>({ method: 'DELETE', ...args }),
};
