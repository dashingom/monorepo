import { ApiEndpointSpecification } from './types';
import { HttpMethod } from '../http-request';
import * as Helpers from '../api-request-helpers';
import * as Types from '../types';
import { LOGIN } from './url-constants';

type SecurityLoginEndpointSpecification = ApiEndpointSpecification;
export const SecurityLoginEndpointSpecification: SecurityLoginEndpointSpecification = {
    url: LOGIN,
    method: HttpMethod.POST,
    requestBodySchemaName: 'SecurityLoginRequestBody',
    okResponseSchemaName: 'SecurityLoginOkResponse',
    notOkResponseSchemaName: 'GenericNotOkResponse',
    authenticated: false,
};

export const invokeSecurityLogin = Helpers.makeApiRequestFn<
    {},
    Types.SecurityLoginRequestBody,
    Types.SecurityLoginOkResponse
>(SecurityLoginEndpointSpecification);
