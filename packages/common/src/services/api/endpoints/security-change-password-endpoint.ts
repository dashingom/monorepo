import { ApiEndpointSpecification } from './types';
import { HttpMethod } from '../http-request';
import * as Helpers from '../api-request-helpers';
import * as Types from '../types';
import { CHANGE_PASSWORD } from './url-constants';

type SecurityChangePasswordEndpointSpecification = ApiEndpointSpecification;
export const SecurityChangePasswordEndpointSpecification: SecurityChangePasswordEndpointSpecification = {
    url: CHANGE_PASSWORD,
    method: HttpMethod.POST,
    requestBodySchemaName: 'SecurityChangePasswordRequestBody',
    okResponseSchemaName: 'SecurityChangePasswordOkResponse',
    notOkResponseSchemaName: 'GenericNotOkResponse',
    authenticated: true,
};

export const invokeSecurityChangePassword = Helpers.makeApiRequestFn<
    {},
    Types.SecurityChangePasswordRequestBody,
    Types.SecurityChangePasswordOkResponse
>(SecurityChangePasswordEndpointSpecification);
