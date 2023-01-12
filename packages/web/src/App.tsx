import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';
import {
  SecurityContextProvider,
  AuthNavigationContainer,
  AuthUIContextProvider,
  useSecurityActions,
} from '@brightlayer-ui/react-auth-workflow';
import { FijiAuthUIActions as AuthUIActions } from './store/actions/AuthUIActions';
import { FijiRegistrationUIActions as RegistrationUIActions } from './store/actions/RegistrationUIActions';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Home } from './pages/Home';
import BrandLogo from './assets/images/Logo_White_Screen.svg';

import { UserInfoProvider } from '@fiji/common/src/contexts/user-info-context';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

export const AuthUIConfiguration = (props: any) => {
  const securityContextActions = useSecurityActions();

  return (
    <AuthUIContextProvider
      authActions={AuthUIActions(securityContextActions)}
      registrationActions={RegistrationUIActions}
      showSelfRegistration={true}
      htmlEula={false}
      contactEmail={'something@email.com'}
      contactPhone={'1-800-123-4567'}
      projectImage={BrandLogo}
    >
      {props.children}
    </AuthUIContextProvider>
  );
};

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
        <CssBaseline />
        <SecurityContextProvider>
          <AuthUIConfiguration>
            <QueryClientProvider client={queryClient}>
              <UserInfoProvider>
                <AuthNavigationContainer>
                  <Route path="" element={<Home />} />
                  <Route path="*" element={<NoMatch />} />
                </AuthNavigationContainer>
              </UserInfoProvider>
            </QueryClientProvider>
          </AuthUIConfiguration>
        </SecurityContextProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
