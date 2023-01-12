import { ApiEndpointSpecification } from './types';
import { HttpMethod } from '../http-request';
import * as Helpers from '../api-request-helpers';
import * as Types from '../types';
import { USER_SETTING } from './url-constants';

type UserSettingsEndpointSpecification = ApiEndpointSpecification;
export const UserSettingsEndpointSpecification: UserSettingsEndpointSpecification = {
  url: USER_SETTING,
  method: HttpMethod.GET,
  requestParamsSchemaName: 'UserSettingsRequestParams',
  requestBodySchemaName: 'UserSettingsRequestBody',
  okResponseSchemaName: 'UserSettingsOkResponse',
  notOkResponseSchemaName: 'GenericNotOkResponse',
  authenticated: true,
};

export const invokeUserSettings = Helpers.makeApiRequestFn<
  Types.UserSettingsRequestParams,
  Types.UserSettingsRequestBody,
  Types.UserSettingsOkResponse
>(UserSettingsEndpointSpecification);
