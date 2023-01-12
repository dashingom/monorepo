import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import * as BLUIThemes from '@brightlayer-ui/react-native-themes';
import {configureStore} from '@fiji/common';
import {Provider} from 'react-redux';

import {
  SecurityContextProvider,
  AuthNavigationContainer,
  AuthUIContextProvider,
  useSecurityActions,
} from '@brightlayer-ui/react-native-auth-workflow';
import AuthUIActions from './src/store/actions/AuthUIActions';
import RegistrationUIActions from './src/store/actions/RegistrationUIActions';
import {MainRouter} from './src/navigation';
import {UserInfoProvider} from './src/contexts/user-info-context';

export const AuthUIConfiguration = (props: any) => {
  const securityContextActions = useSecurityActions();

  return (
    <AuthUIContextProvider
      authActions={AuthUIActions(securityContextActions)}
      registrationActions={RegistrationUIActions}
      showSelfRegistration={false}
      allowDebugMode={false}
      contactEmail={'something@email.com'}
      contactPhone={'1-800-123-4567'}
      projectImage={require('./src/assets/images/ETN-DMS.png')}>
      {props.children}
    </AuthUIContextProvider>
  );
};

const App = () => {
  const ref = React.useRef(null);

  return (
    <PaperProvider theme={BLUIThemes.blue}>
      <Provider store={configureStore()}>
        <SecurityContextProvider>
          <AuthUIConfiguration>
            <AuthNavigationContainer key={'fiji'} ref={ref}>
              <UserInfoProvider>
                <MainRouter />
              </UserInfoProvider>
            </AuthNavigationContainer>
          </AuthUIConfiguration>
        </SecurityContextProvider>
      </Provider>
    </PaperProvider>
  );
};

export default App;
