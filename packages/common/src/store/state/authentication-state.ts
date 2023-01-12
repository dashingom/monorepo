export type AuthenticationState = {
  isAuthenticating: boolean;
  login: {
    errorMessage: string;
  };
  forgotPassword: {
    loading: boolean;
    success: boolean;
    errorMessage: string;
  };
  setPassword: {
    requested: boolean;
    pending: boolean;
    success: boolean;
  };
  verifyResetCode: {
    code: string;
    pending: boolean;
    success: boolean;
  };
  preloadData: {
    loading: boolean;
    success: boolean;
  };
};

export const initialAuthenticationState: AuthenticationState = {
  isAuthenticating: false,
  login: {
    errorMessage: '',
  },
  setPassword: {
    requested: false,
    pending: false,
    success: false,
  },
  forgotPassword: {
    loading: false,
    errorMessage: '',
    success: false,
  },
  verifyResetCode: {
    code: '',
    pending: false,
    success: false,
  },
  preloadData: {
    loading: false,
    success: false,
  },
};
