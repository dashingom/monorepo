import {
  AuthenticationState,
  initialAuthenticationState,
} from './authentication-state';

export type State = {
  Authentication: AuthenticationState;
};

export const InitialState: State = {
  Authentication: initialAuthenticationState,
};
