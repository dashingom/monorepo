import {State} from '../state';

export const AuthenticationSelectors = {
  forgotPasswordLoading: (state: State): boolean =>
    state.Authentication.forgotPassword.loading,
  forgotPasswordErrorMessage: (state: State): string =>
    state.Authentication.forgotPassword.errorMessage,
  forgotPasswordSuccess: (state: State): boolean =>
    state.Authentication.forgotPassword.success,

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  passwordVerification: (state: State) => state.Authentication.verifyResetCode,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  password: (state: State) => state.Authentication.setPassword,

  errorMessage: (state: State): string =>
    state.Authentication.login.errorMessage,
};
