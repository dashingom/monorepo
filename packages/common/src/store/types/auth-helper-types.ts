import { HttpResponse } from '../../services/api/http-request';

export type AuthHelper = {
  send: <T>(request: Promise<HttpResponse<T>>) => Promise<HttpResponse<T>>;
  onUserAuthenticated(args: { email: string; userId: string; expirationDate: Date }): void;
  onUserNotAuthenticated(): void;
};
