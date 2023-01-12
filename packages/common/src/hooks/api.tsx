import { useQuery, useQueryClient } from '@tanstack/react-query';
import * as ApiRequests from '@fiji/common/src/services/api/requests';
import { useSecurityActions, useSecurityState } from '@brightlayer-ui/react-auth-workflow';

const fetchUserInfo = async () => {
  const securityHelper: any = useSecurityActions();
  const securityState: any = useSecurityState();
  const userId = securityState.userId;

  const response = await ApiRequests.getUserSettings(
    {
      userId,
    },
    {
      authHelper: {
        send: (response: any): any => response.then((e: any) => e).catch((error: any) => error),
        onUserAuthenticated: securityHelper.onUserAuthenticated,
        onUserNotAuthenticated: securityHelper.onUserNotAuthenticated,
      },
    },
  );
  return response;
};

const useUserInfoRQ = () => {
  return useQuery(['user-info'], () => fetchUserInfo());
};

export { useUserInfoRQ };
