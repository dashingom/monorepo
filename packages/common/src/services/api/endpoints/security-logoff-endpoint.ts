import { ApiEndpointSpecification } from './types';
import { HttpMethod } from '../http-request';
import * as Helpers from '../api-request-helpers';
import * as Types from '../types';
import { LOGOFF } from './url-constants';

type SecurityLogoffEndpointSpecification = ApiEndpointSpecification;
export const SecurityLogoffEndpointSpecification: SecurityLogoffEndpointSpecification = {
    url: LOGOFF,
    method: HttpMethod.DELETE,
    requestParamsSchemaName: 'SecurityLogoffRequestParams',
    requestBodySchemaName: 'SecurityLogoffRequestBody',
    okResponseSchemaName: 'SecurityLogoffOkResponse',
    notOkResponseSchemaName: 'GenericNotOkResponse',
    authenticated: true,
};

export const invokeSecurityLogoff = Helpers.makeApiRequestFn<
    Types.SecurityLogoffRequestParams,
    Types.SecurityLogoffRequestBody,
    Types.SecurityLogoffOkResponse
>(SecurityLogoffEndpointSpecification);
