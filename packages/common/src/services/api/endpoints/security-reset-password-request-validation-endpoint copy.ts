import { ApiEndpointSpecification } from './types';
import { HttpMethod } from '../http-request';
import * as Helpers from '../api-request-helpers';
import * as Types from '../types';
import { RESET_PASSWORD_VALIDATION } from './url-constants';

type SecurityResetPasswordRequestValidationEndpointSpecification = ApiEndpointSpecification;
export const SecurityResetPasswordRequestValidationEndpointSpecification: SecurityResetPasswordRequestValidationEndpointSpecification = {
    url: RESET_PASSWORD_VALIDATION,
    method: HttpMethod.POST,
    requestParamsSchemaName: 'SecurityResetPasswordRequestValidationRequestParams',
    requestBodySchemaName: 'SecurityResetPasswordRequestValidationRequestBody',
    okResponseSchemaName: 'SecurityResetPasswordRequestValidationOkResponse',
    notOkResponseSchemaName: 'GenericNotOkResponse',
    authenticated: false,
};

export const invokeSecurityResetPasswordRequestValidation = Helpers.makeApiRequestFn<
    Types.SecurityResetPasswordRequestValidationRequestParams,
    Types.SecurityResetPasswordRequestValidationRequestBody,
    Types.SecurityResetPasswordRequestValidationOkResponse
>(SecurityResetPasswordRequestValidationEndpointSpecification);
