export const ALARM_ACKNOWLEDGEMENT = '/api/alarm/acknowledgement/wellaware';
export const ALARM_COUNT = '/api/alarm/:siteIdOrLocationIdOrOrganizationId/count';
export const ALARM_DETAILS = '/api/alarm/details';
export const ALARM_STATUS = '/api/alarm/status';
export const ALARM_TIMELINE = '/api/alarm/:organizationIdOrLocationIdOrSiteId/timeline';
export const ALARM_TIMELINE_EXPORT = '/api/alarm/:organizationIdOrLocationIdOrSiteId/timeline/export';

export const DEVICE_CHANNELS = '/api/device/:deviceId/channels';
export const DEVICE_CONNECTION = '/api/device/:deviceId/status';
export const DEVICE_DETAILS = '/api/device/:deviceId/details';
export const DEVICE_DEVICES = '/api/device/:siteIdOrLocationIdOrOrganizationId/devices';
export const DEVICE_TEMPERATURE_GRAPH = '/api/chart/temperature';
export const DEVICE_HUMIDITY_GRAPH = '/api/chart/humidity';
export const DEVICE_LOAD_GRAPH = '/api/chart/load';
export const DEVICE_SENSOR_LIST = '/api/chart/:deviceId/channels';
export const DEVICE_PDI_GRAPH = '/api/chart/pdi';
export const DEVICE_QMAX_GRAPH = '/api/chart/qmax';
export const DEVICE_PPC_GRAPH = '/api/chart/ppc';
export const DEVICE_SENSOR_TREND = '/api/chart/sensordata/latest';
export const DEVICE_PHASE_RESOLVED_GRAPH_DATE = '/api/chart/phaseresolvedgraph/dates';
export const DEVICE_PHASERESOLVED_GRAPH = '/api/chart/PhaseResolvedGraph';
export const DELETE_DEVICE ='/api/sierradevice/delete/gatewaydevices';

export const FEATURE_FLAG = '/api/security/featureflags';
export const CHANGE_PASSWORD = '/api/security/user/password';
export const LOGIN = '/api/security/login';
export const LOGOFF = '/api/security/logoff/:userId';
export const REFRESH = '/api/security/token/refresh';
export const RESET_PASSWORD = '/api/security/reset/password';
export const RESET_PASSWORD_REQUEST = '/api/security/reset/:email/password';
export const RESET_PASSWORD_VALIDATION = '/api/security/reset/validate';
export const SIGNALR = '/api/security/notification';

export const SITE_BATTERY_STATUS = '/api/site/:siteIdOrLocationIdOrOrganizationId/battery/status';
export const SITE_DETAILS = '/api/site/:siteId/details';
export const DEVICE_COUNT = '/api/site/:siteIdOrLocationIdOrOrganizationId/devices/count';
export const LOCATION_LIST = '/api/site/:organizationId/locations/:userId';
export const SITE_PROFILE = '/api/site/:siteId/registration';
export const SITE_REGISTRATION = '/api/site/registration';
export const SITE_LIST = '/api/site/:locationId/sites';
export const SITE_STATUS = '/api/site/:siteIdOrLocationIdOrOrganizationId/status';
export const UPDATE_SITE_REGISTRATION = '/api/site/:siteId/registration';
export const ORGANIZATION_LIST = '/api/site/:userId/organizations';

export const TREND_EXPORT = '/api/site/:siteId/trends/export';
export const TREND_DEVICE_EXPORT = '/api/device/:deviceId/trends/export';
export const TREND_DETAILS = '/api/site/:siteId/trends';
export const DEVICE_TREND_DETAILS = '/api/device/:deviceId/trenddata';
export const TREND_CHANNELS = '/api/device/:deviceId/trendchannels';

export const UPDATE_USER_PROFILE = '/api/user/:userId/role';
export const USER_LIST = '/api/user/:siteId/users';
export const USER_DELETE = '/api/user/registration';
export const USER_REGISTRATION = '/api/user/registration';
export const USER_REGISTRATION_REQUEST = '/api/user/registration/invite';
export const USER_REGISTRATION_VALIDATION = '/api/user/registration/validate';
export const USER_REGISTRATION_ROLES = '/api/user/registration/roles';
export const USER_ROLES = '/api/user/:userId/roles';
export const USER_ROLES_OPERATIONS = '/api/user/:roleId/operations';
export const USER_SET_SETTING = '/api/user/settings';
export const USER_SETTING = '/api/user/:userId/settings';

export const SIERRA_CHILD_DEVICE_DELETE = '/api/sierradevice/delete/childdevices';
