import {InitialState} from '../state';
import {AppReducer} from './app-reducer';

export const authReducer: AppReducer<'Authentication'> = (
  state = InitialState.Authentication,
  action,
): typeof state => {
  switch (action.type) {
    case 'Authentication/Login/Started':
      return {
        ...state,
        isAuthenticating: true,
        login: {
          errorMessage: '',
        },
      };
    case 'Authentication/Login/Succeeded':
      return {
        ...state,
        isAuthenticating: false,
        login: {
          errorMessage: '',
        },
      };
    case 'Authentication/Login/Failed':
      return {
        ...state,
        isAuthenticating: false,
        login: {
          errorMessage: action.payload.errorMessage,
        },
      };
    case 'Authentication/VerifyResetCode/Started':
      return {
        ...state,
        verifyResetCode: {
          code: action.payload.code,
          pending: true,
          success: false,
        },
      };
    case 'Authentication/VerifyResetCode/Succeeded':
      return {
        ...state,
        verifyResetCode: {
          code: action.payload.code,
          pending: false,
          success: true,
        },
      };
    case 'Authentication/VerifyResetCode/Failed':
      return {
        ...state,
        verifyResetCode: {
          code: action.payload.code,
          pending: false,
          success: false,
        },
      };
    case 'Authentication/SetPassword/Started':
      return {
        ...state,
        setPassword: {
          pending: true,
          requested: true,
          success: false,
        },
      };
    case 'Authentication/SetPassword/Succeeded':
      return {
        ...state,
        setPassword: {
          pending: false,
          requested: true,
          success: true,
        },
      };
    case 'Authentication/SetPassword/Failed':
      return {
        ...state,
        setPassword: {
          pending: false,
          requested: true,
          success: false,
        },
      };
    case 'Authentication/ResetPassword/Started':
      return {
        ...state,
        forgotPassword: {
          loading: true,
          success: false,
          errorMessage: '',
        },
      };
    case 'Authentication/ResetPassword/Succeeded':
      return {
        ...state,
        forgotPassword: {
          loading: false,
          success: true,
          errorMessage: '',
        },
      };
    case 'Authentication/ResetPassword/Failed':
      return {
        ...state,
        forgotPassword: {
          loading: false,
          success: false,
          errorMessage: action.payload.errorMessage,
        },
      };
    case 'Authentication/ResetPassword/Reset':
      return {
        ...state,
        forgotPassword: {
          loading: false,
          success: false,
          errorMessage: '',
        },
      };

    default:
      return state;
  }
};
