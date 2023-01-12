import { ApiEndpointSpecification } from './types';
import { HttpMethod } from '../http-request';
import * as Helpers from '../api-request-helpers';
import * as Types from '../types';

type SecurityResetPasswordEndpointSpecification = ApiEndpointSpecification;
export const SecurityResetPasswordEndpointSpecification: SecurityResetPasswordEndpointSpecification = {
    url: '/api/security/reset/password',
    method: HttpMethod.POST,
    requestBodySchemaName: 'SecurityResetPasswordRequestBody',
    okResponseSchemaName: 'SecurityResetPasswordOkResponse',
    notOkResponseSchemaName: 'GenericNotOkResponse',
    authenticated: false,
};

export const invokeSecurityResetPassword = Helpers.makeApiRequestFn<
    {},
    Types.SecurityResetPasswordRequestBody,
    Types.SecurityResetPasswordOkResponse
>(SecurityResetPasswordEndpointSpecification);
