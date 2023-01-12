import {
  AuthUIActions,
  SecurityContextActions,
} from '@brightlayer-ui/react-native-auth-workflow';
import {LocalStorage} from '../local-storage';
import * as ApiRequests from '@fiji/common/src/services/api/requests';
import moment from 'moment';
// const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const FijiAuthUIActions =
  (securityHelper: SecurityContextActions) => (): AuthUIActions => ({
    initiateSecurity: async (): Promise<void> => {
      /*let biometricAuthData: any;
        try {
            biometricAuthData = await LocalStorage.readBiometricsAuthData();
        } catch (e) {
            //
        }*/
      let authData: any;

      try {
        authData = await LocalStorage.readAuthData();
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // securityHelper.onUserAuthenticated()

      const currentDate = moment();
      if (
        authData?.email !== undefined &&
        authData?.expirationDate !== undefined &&
        !currentDate.add(2, 'minutes').isAfter(moment(authData.expirationDate))
      ) {
        securityHelper.onUserAuthenticated({
          email: authData?.email,
          userId: authData.userId ?? '',
          rememberMe: authData?.rememberMeData.rememberMe,
        });
      } else {
        const rememberMeEmail = authData?.rememberMeData.rememberMe
          ? authData?.rememberMeData.user
          : undefined;
        securityHelper.onUserNotAuthenticated(false, rememberMeEmail);
        LocalStorage.clearAuthCredentials();
      }
    },

    logIn: async (
      email: string,
      password: string,
      rememberMe: boolean,
    ): Promise<void> => {
      const user = email;
      const payload: any = await ApiRequests.login(
        {
          user, // email address
          password,
        },
        {authHelper: undefined},
      );

      if (payload.ok && payload.response.data.id) {
        const expirationDate = payload.response.data.expiration_date;
        LocalStorage.saveAuthCredentials(
          email,
          payload.response.data.id,
          payload.response.data.token,
          expirationDate,
        );
        LocalStorage.saveRememberMeData(email, rememberMe);
        LocalStorage.saveRememberBiometricsData(email, password);

        securityHelper.onUserAuthenticated({
          email: email,
          userId: payload.response.data.id,
          rememberMe: rememberMe,
        });

        return;
      }

      console.error(
        'Error Code',
        ApiRequests.extractResponseNotOkCode(payload.response),
        'Description',
        ApiRequests.extractResponseNotOkMessage(payload.response),
      );

      const errorMessage =
        payload &&
        (payload.httpStatusCode === 401 ||
          payload.httpStatusCode === 400 ||
          payload.httpStatusCode === 404)
          ? 'LOGIN.INVALID_CREDENTIALS'
          : 'LOGIN.GENERIC_ERROR';

      throw new Error(errorMessage);
    },

    forgotPassword: async (email: string): Promise<void> => {
      const payload = await ApiRequests.resetPasswordRequest(
        {email},
        {authHelper: undefined},
      );

      if (payload.ok) {
        return;
      }

      throw new Error('Could not reset your password at this time.');
    },

    verifyResetCode: async (code: string): Promise<void> => {
      const response = await ApiRequests.validateResetPasswordRequest(
        {resetcode: code},
        {authHelper: undefined},
      );

      if (response.ok) {
        return;
      }

      throw new Error('Sorry, there was a problem sending your request.');
    },

    setPassword: async (code: string, password: string): Promise<void> => {
      const payload = await ApiRequests.resetPassword(
        {resetcode: code, newpassword: password},
        {authHelper: undefined},
      );

      if (payload.ok) {
        return;
      }

      throw new Error('Sorry, there was a problem sending your request.');
    },

    changePassword: async (
      oldPassword: string,
      newPassword: string,
    ): Promise<void> => {
      const payload = await ApiRequests.changePassword(
        {
          currentpassword: oldPassword,
          newpassword: newPassword,
        },
        {authHelper: undefined},
      );

      if (payload.ok) {
        return;
      }

      throw new Error('Sorry, there was a problem sending your request.');
    },
  });

export default FijiAuthUIActions;
