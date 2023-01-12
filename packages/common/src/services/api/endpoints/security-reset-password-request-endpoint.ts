import { ApiEndpointSpecification } from './types';
import { HttpMethod } from '../http-request';
import * as Helpers from '../api-request-helpers';
import * as Types from '../types';

type SecurityResetPasswordRequestEndpointSpecification = ApiEndpointSpecification;
export const SecurityResetPasswordRequestEndpointSpecification: SecurityResetPasswordRequestEndpointSpecification = {
    url: '/api/security/reset/:email/password',
    method: HttpMethod.GET,
    requestParamsSchemaName: 'SecurityResetPasswordRequestRequestParams',
    requestBodySchemaName: 'SecurityResetPasswordRequestRequestBody',
    okResponseSchemaName: 'SecurityResetPasswordRequestOkResponse',
    notOkResponseSchemaName: 'GenericNotOkResponse',
    authenticated: false,
};

export const invokeSecurityResetPasswordRequest = Helpers.makeApiRequestFn<
    Types.SecurityResetPasswordRequestRequestParams,
    Types.SecurityResetPasswordRequestRequestBody,
    Types.SecurityResetPasswordRequestOkResponse
>(SecurityResetPasswordRequestEndpointSpecification);
