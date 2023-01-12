import { ApiEndpointSpecification } from './types';
import { HttpMethod } from '../http-request';
import * as Helpers from '../api-request-helpers';
import * as Types from '../types';
import { REFRESH } from './url-constants';

type SecurityRefreshEndpointSpecification = ApiEndpointSpecification;
export const SecurityRefreshEndpointSpecification: SecurityRefreshEndpointSpecification = {
    url: REFRESH,
    method: HttpMethod.POST,
    requestBodySchemaName: 'SecurityRefreshRequestBody',
    okResponseSchemaName: 'SecurityRefreshOkResponse',
    notOkResponseSchemaName: 'GenericNotOkResponse',
    authenticated: false,
};

export const invokeSecurityRefresh = Helpers.makeApiRequestFn<
    {},
    Types.SecurityRefreshRequestBody,
    Types.SecurityRefreshOkResponse
>(SecurityRefreshEndpointSpecification);
