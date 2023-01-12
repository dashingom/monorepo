import {
  LOCAL_USER_DATA,
  REMEMBER_ME_DATA,
  REMEMBER_BIOMETRICS_DATA,
  HAS_BIOMETRICS,
  HAS_BEEN_ASKED_FOR_BIOMETRICS,
  HAS_LOGGED_OUT,
} from '@fiji/common';

import AsyncStorage from '@react-native-async-storage/async-storage';

// For cross compatibility pretend AsyncStorage is just window local storage
const window = {
  localStorage: {
    getItem: (key: string): Promise<string | null> => AsyncStorage.getItem(key),
    setItem: (key: string, value: string): Promise<void> =>
      AsyncStorage.setItem(key, value),
    removeItem: (key: string): Promise<void> => AsyncStorage.removeItem(key),
  },
};

type AuthData = {
  userId: string | undefined;
  email: string | undefined;
  token: string | undefined;

  expirationDate: string | undefined;
  rememberMeData: {user: string; rememberMe: boolean};
};

type BiometricsAuthData = {
  email: string | undefined;
  password: string | undefined;
};

type BiometricsData = {
  hasBiometrics: boolean;
};

type HasAskedBiometrics = {
  hasBeenAskedForBiometrics: boolean;
};

type HasLoggedOut = {
  hasLoggedOut: boolean;
};

async function readAuthData(): Promise<AuthData> {
  const jsonUserData =
    (await window.localStorage.getItem(LOCAL_USER_DATA)) || '{}';

  const userData = JSON.parse(jsonUserData) as {
    user?: string;
    userId?: string;
    token?: string;
    expirationDate?: string;
  };
  const jsonRememberMeData =
    (await window.localStorage.getItem(REMEMBER_ME_DATA)) || '{}';
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
function saveBiometrics(value: boolean): void {
  const biometricsData = {
    hasBiometrics: value,
  };
  window.localStorage.setItem(HAS_BIOMETRICS, JSON.stringify(biometricsData));
}
function saveRememberBiometricsData(email: string, password: string): void {
  const biometricsAuthData = {
    email: email,
    password: password,
  };
  window.localStorage.setItem(
    REMEMBER_BIOMETRICS_DATA,
    JSON.stringify(biometricsAuthData),
  );
}
async function readBiometricsData(): Promise<BiometricsData> {
  const jsonBiometricsData =
    (await window.localStorage.getItem(HAS_BIOMETRICS)) || '{}';
  const biometricsData = JSON.parse(jsonBiometricsData) as {
    hasBiometrics: boolean;
  };

  return biometricsData;
}
async function readBiometricsAuthData(): Promise<BiometricsAuthData> {
  const jsonRememberBiometricsData =
    (await window.localStorage.getItem(REMEMBER_BIOMETRICS_DATA)) || '{}';
  const rememberBiometricsData = JSON.parse(jsonRememberBiometricsData) as {
    email: string;
    password: string;
  };

  return rememberBiometricsData;
}

function saveHasBeenAskedForBiometrics(value: boolean): void {
  const hasBeenAskedForBiometrics = {
    hasBeenAskedForBiometrics: value,
  };
  window.localStorage.setItem(
    HAS_BEEN_ASKED_FOR_BIOMETRICS,
    JSON.stringify(hasBeenAskedForBiometrics),
  );
}

async function readHasBeenAskedForBiometrics(): Promise<HasAskedBiometrics> {
  const jsonHasBeenAskedForBiometrics =
    (await window.localStorage.getItem(HAS_BEEN_ASKED_FOR_BIOMETRICS)) || '{}';
  const hasBeenAskedForBiometrics = JSON.parse(
    jsonHasBeenAskedForBiometrics,
  ) as {
    hasBeenAskedForBiometrics: boolean;
  };

  return hasBeenAskedForBiometrics;
}

async function readHasLoggedOut(): Promise<HasLoggedOut> {
  const jsonHasLoggedOut =
    (await window.localStorage.getItem(HAS_LOGGED_OUT)) || '{}';
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
function clearBiometricsData(): void {
  window.localStorage.removeItem(HAS_BIOMETRICS);
}
function clearRememberBiometricsData(): void {
  window.localStorage.removeItem(REMEMBER_BIOMETRICS_DATA);
}
function clearHasBeenAskedForBiometrics(): void {
  window.localStorage.removeItem(HAS_BEEN_ASKED_FOR_BIOMETRICS);
}
function clearHasLoggedOut(): void {
  window.localStorage.removeItem(HAS_LOGGED_OUT);
}

export const LocalStorage = {
  readAuthData,
  saveAuthCredentials,
  saveRememberMeData,
  saveBiometrics,
  saveHasBeenAskedForBiometrics,
  saveRememberBiometricsData,
  readBiometricsData,
  readHasBeenAskedForBiometrics,
  readBiometricsAuthData,
  readHasLoggedOut,
  setHasLoggedOut,
  clearAuthCredentials,
  clearRememberMeData,
  clearBiometricsData,
  clearHasBeenAskedForBiometrics,
  clearRememberBiometricsData,
  clearHasLoggedOut,
};
