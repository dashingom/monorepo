import * as ApiRequests from '../../services/api/requests';
import { AuthenticationActions } from '../actions/authentication-actions';
import { AppThunk } from '../actions';

export const AuthenticationThunks = {
  forgotPassword:
    (email: string): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(AuthenticationActions.resetPasswordStarted());

      const payload = await ApiRequests.resetPasswordRequest({ email }, { authHelper: undefined });

      if (payload.ok) {
        dispatch(AuthenticationActions.resetPasswordSucceeded());

        return;
      }

      dispatch(
        AuthenticationActions.resetPasswordFailed('Could not reset your password at this time.'),
      );
    },

  verifyResetCode:
    (code: string): AppThunk =>
    async (dispatch): Promise<void> => {
      dispatch(AuthenticationActions.verifyResetCodeStarted(code));

      const response = await ApiRequests.validateResetPasswordRequest(
        { resetcode: code },
        { authHelper: undefined },
      );

      if (response.ok) {
        dispatch(AuthenticationActions.verifyResetCodeSucceeded(code));

        return;
      }

      dispatch(AuthenticationActions.verifyResetCodeFailed(code));
    },
};
