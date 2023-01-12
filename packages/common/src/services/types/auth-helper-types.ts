import { HttpResponse } from '../api/http-request';

export type AuthHelper = {
  send: <T>(request: Promise<HttpResponse<T>>) => Promise<HttpResponse<T>>;
  onUserAuthenticated(args: { email: string; userId: string; rememberMe: boolean }): void;
  onUserNotAuthenticated(): void;
  signal?: any | null;
};
