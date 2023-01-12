import React from 'react';
import { useSecurityActions, useSecurityState } from '@brightlayer-ui/react-auth-shared';
import { LocalStorage } from '../../store/local-storage';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import * as ApiRequests from '@fiji/common/src/services/api/requests';
import './home.css';
import { Stack } from '@mui/system';
import { useQuery } from '@tanstack/react-query';
import Pokemon from '../Pokemon';
import { Box, Container, Grid, Typography } from '@mui/material';

export const Home: React.FC = () => {
  const securityHelper = useSecurityActions();
  const { t } = useTranslation();
  // const userInfo = useUserInfo();

  const securityState: any = useSecurityState();
  const userId = securityState.userId;

  const { data, isLoading, isError, error } = useQuery<any>(['user-info'], () =>
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
    ),
  );

  const logOut = (): void => {
    LocalStorage.clearAuthCredentials();
    securityHelper.onUserNotAuthenticated();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <Container maxWidth="sm" component="main">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Welcome to FIJI {data.response.data && <h1>{data.response.data.user.fName}</h1>}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Pokemon />
          </Grid>
          <Grid item xs={8}>
            <Stack spacing={2} direction="row">
              <Button variant={'contained'} onClick={securityHelper.showChangePassword}>
                {t('USER_SETTINGS.CHANGE_PASSWORD')}
              </Button>
              <Button variant={'contained'} onClick={logOut}>
                {t('USER_MENU.LOG_OUT')}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
