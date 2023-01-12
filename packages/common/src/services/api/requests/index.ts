import * as Endpoints from '../endpoints';
import { GenericNotOkResponse } from '../types';

export const login = Endpoints.invokeSecurityLogin;
export const logoff = Endpoints.invokeSecurityLogoff;
export const refresh = Endpoints.invokeSecurityRefresh;
export const changePassword = Endpoints.invokeSecurityChangePassword;
export const resetPassword = Endpoints.invokeSecurityResetPassword;
export const resetPasswordRequest = Endpoints.invokeSecurityResetPasswordRequest;
export const validateResetPasswordRequest = Endpoints.invokeSecurityResetPasswordRequestValidation;

export const getUserSettings = Endpoints.invokeUserSettings;

export const extractResponseNotOkCode = (response: GenericNotOkResponse): number => {
  if ('errorCode' in response) {
    return response.errorCode;
  }
  return response.statusCode;
};

export const extractResponseNotOkMessage = (response: GenericNotOkResponse): string => {
  if ('errorCode' in response) {
    return response.errorDescription;
  }
  return response.message;
};
