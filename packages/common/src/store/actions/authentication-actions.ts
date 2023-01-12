import {ActionType} from '../types';

export const AuthenticationActions = {
  loginStarted: () =>
    ({
      type: 'Authentication/Login/Started',
    } as const),

  loginSucceeded: () =>
    ({
      type: 'Authentication/Login/Succeeded',
    } as const),

  loginFailed: (errorMessage: string) =>
    ({
      type: 'Authentication/Login/Failed',
      payload: {errorMessage},
    } as const),

  setPasswordStarted: () =>
    ({
      type: 'Authentication/SetPassword/Started',
    } as const),

  setPasswordSucceeded: () =>
    ({
      type: 'Authentication/SetPassword/Succeeded',
    } as const),

  setPasswordFailed: () =>
    ({
      type: 'Authentication/SetPassword/Failed',
    } as const),

  resetPasswordStarted: () =>
    ({
      type: 'Authentication/ResetPassword/Started',
    } as const),

  resetPasswordSucceeded: () =>
    ({
      type: 'Authentication/ResetPassword/Succeeded',
    } as const),

  resetPasswordFailed: (errorMessage: string) =>
    ({
      type: 'Authentication/ResetPassword/Failed',
      payload: {errorMessage},
    } as const),
  resetPasswordReset: () =>
    ({
      type: 'Authentication/ResetPassword/Reset',
    } as const),

  verifyResetCodeStarted: (code: string) =>
    ({
      type: 'Authentication/VerifyResetCode/Started',
      payload: {code},
    } as const),

  verifyResetCodeSucceeded: (code: string) =>
    ({
      type: 'Authentication/VerifyResetCode/Succeeded',
      payload: {code},
    } as const),

  verifyResetCodeFailed: (code: string) =>
    ({
      type: 'Authentication/VerifyResetCode/Failed',
      payload: {code},
    } as const),
};

export type AuthenticationActions = ActionType<typeof AuthenticationActions>;
