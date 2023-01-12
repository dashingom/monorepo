import { ApiEndpointSpecification } from './types';
import { HttpMethod } from '../http-request';
import * as Helpers from '../api-request-helpers';
import * as Types from '../types';
import { RESET_PASSWORD_REQUEST } from './url-constants';

type SecurityResetPasswordRequestEndpointSpecification = ApiEndpointSpecification;
export const SecurityResetPasswordRequestEndpointSpecification: SecurityResetPasswordRequestEndpointSpecification = {
    url: RESET_PASSWORD_REQUEST,
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
