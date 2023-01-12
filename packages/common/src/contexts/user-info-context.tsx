import React, { useEffect, useState } from 'react';
import * as ApiRequests from '@fiji/common/src/services/api/requests';
import { useSecurityActions, useSecurityState } from '@brightlayer-ui/react-auth-workflow';

const Context = React.createContext<any | null>(null);

function useUserInfo(): any {
  const contextState = React.useContext(Context);
  if (contextState === null) {
    throw new Error('useUserInfo must be used within a UserInfoProvider');
  }
  return contextState;
}

const UserInfoProvider = (props: any): JSX.Element => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, changeLoading] = useState(false);
  const securityHelper: any = useSecurityActions();
  const securityState: any = useSecurityState();

  const fetchUserInformation = (): null => {
    changeLoading(true);
    const userId = securityState.userId;
    ApiRequests.getUserSettings(
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
    )
      .then(async (e: any): Promise<any> => {
        if (
          e &&
          e.response &&
          e.httpStatusCode === 200 &&
          e.response.data &&
          e.response.data.user
        ) {
          const { ...rest } = e.response.data;
          setUserInfo(rest);
        }
      })
      .catch(() => {
        securityHelper.onUserNotAuthenticated();
      })
      .finally(() => {
        changeLoading(false);
      });
    return null;
  };

  useEffect(() => {
    fetchUserInformation();
  }, []);

  return (
    <Context.Provider
      value={{
        userInfo,
        loading,
        fetchUserInformation,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { UserInfoProvider, useUserInfo };
