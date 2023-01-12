import { LOCAL_USER_DATA, REMEMBER_ME_DATA, HAS_LOGGED_OUT } from '@fiji/common/src/constants';

type AuthData = {
  userId: string | undefined;
  email: string | undefined;
  token: string | undefined;
  expirationDate: string | undefined;
  rememberMeData: { user: string; rememberMe: boolean };
};

type HasLoggedOut = {
  hasLoggedOut: boolean;
};

async function readAuthData(): Promise<AuthData> {
  const jsonUserData = window.localStorage.getItem(LOCAL_USER_DATA) || '{}';
  const userData = JSON.parse(jsonUserData) as {
    user?: string;
    userId?: string;
    token?: string;
    expirationDate?: string;
  };
  const jsonRememberMeData = window.localStorage.getItem(REMEMBER_ME_DATA) || '{}';
  const rememberMeData = JSON.parse(jsonRememberMeData) as {
    user: string;
    rememberMe: boolean;
  };
  return {
    userId: userData.userId,
    email: userData.user,
    token: userData.token,
    expirationDate: userData.expirationDate,
    rememberMeData: rememberMeData,
  };
}

function saveAuthCredentials(
  user: string,
  userId: string,
  token: string,
  expirationDate: string,
): void {
  const userData = {
    user: user,
    userId: userId,
    token: token,

    expirationDate: expirationDate,
  };
  window.localStorage.setItem(LOCAL_USER_DATA, JSON.stringify(userData));
}

function saveRememberMeData(user: string, rememberMe: boolean): void {
  const RememberMeData = {
    user: rememberMe ? user : '',
    rememberMe: rememberMe,
  };
  window.localStorage.setItem(REMEMBER_ME_DATA, JSON.stringify(RememberMeData));
}

async function readHasLoggedOut(): Promise<HasLoggedOut> {
  const jsonHasLoggedOut = window.localStorage.getItem(HAS_LOGGED_OUT) || '{}';
  const hasLoggedOut = JSON.parse(jsonHasLoggedOut) as {
    hasLoggedOut: boolean;
  };

  return hasLoggedOut;
}

function setHasLoggedOut(): void {
  const hasLoggedOut = {
    hasLoggedOut: true,
  };
  window.localStorage.setItem(HAS_LOGGED_OUT, JSON.stringify(hasLoggedOut));
}

function clearAuthCredentials(): void {
  window.localStorage.removeItem(LOCAL_USER_DATA);
}

function clearRememberMeData(): void {
  window.localStorage.removeItem(REMEMBER_ME_DATA);
}

function clearHasLoggedOut(): void {
  window.localStorage.removeItem(HAS_LOGGED_OUT);
}

export const LocalStorage = {
  readAuthData,
  saveAuthCredentials,
  saveRememberMeData,
  readHasLoggedOut,
  setHasLoggedOut,
  clearAuthCredentials,
  clearRememberMeData,
  clearHasLoggedOut,
};
