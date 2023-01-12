import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Avatar, Text, useTheme} from 'react-native-paper';
import {
  H4,
  Header,
  IconFamily,
  InfoListItemProps,
  UserMenu,
} from '@brightlayer-ui/react-native-components';
import {Theme} from 'react-native-paper/lib/typescript/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation';
import {useSecurityActions} from '@brightlayer-ui/react-native-auth-workflow';
import {LocalStorage} from '../store/local-storage';
import * as Colors from '@brightlayer-ui/colors';
import {useUserInfo} from '../contexts/user-info-context';

const MenuIcon: IconFamily = {name: 'menu', direction: 'ltr'};
const LockIcon: IconFamily = {name: 'lock', direction: 'ltr'};
const ExitToAppIcon: IconFamily = {name: 'exit-to-app', direction: 'ltr'};

const styles = (
  theme: Theme,
): StyleSheet.NamedStyles<{
  content: ViewStyle;
  pxbLogoWrapper: ViewStyle;
  pxbLogo: ViewStyle;
  bold: TextStyle;
  divider: ViewStyle;
  openURLButtonText: TextStyle;
}> =>
  StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pxbLogoWrapper: {
      justifyContent: 'center',
      marginTop: 16,
    },
    pxbLogo: {
      alignSelf: 'center',
      height: 100,
      width: 100,
    },
    bold: {
      fontWeight: 'bold',
    },
    divider: {
      marginVertical: 24,
    },
    openURLButtonText: {
      color: theme.colors.text,
      padding: 8,
    },
  });

type AppProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<AppProps> = ({navigation}): JSX.Element => {
  const theme = useTheme();
  const defaultStyles = styles(theme);
  const securityHelper = useSecurityActions();
  const {userInfo, loading} = useUserInfo();

  const changePassword = (): void => {
    securityHelper.showChangePassword();
  };

  const logOut = (): void => {
    LocalStorage.clearAuthCredentials();
    securityHelper.onUserNotAuthenticated();
  };

  const menuItems: InfoListItemProps[] = [
    {
      title: 'Change Password',
      icon: LockIcon,
      onPress: (): void => changePassword(),
    },
    {title: 'Log Out', icon: ExitToAppIcon, onPress: (): void => logOut()},
  ];

  var getInitials = (): any => {
    if (userInfo && userInfo.user) {
      let fName = userInfo.user.fName;
      let lName = userInfo.user.lName;
      let string = fName + ' ' + lName;
      var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    }
  };

  return (
    <>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Header
            title={'Home'}
            icon={MenuIcon}
            onIconPress={(): void => {
              navigation.openDrawer();
            }}
            actionItems={[
              {
                component: (
                  <UserMenu
                    menuItems={menuItems}
                    avatar={
                      <Avatar.Text
                        label={getInitials()}
                        size={40}
                        color={Colors.blue[500]}
                        style={{backgroundColor: Colors.blue[50]}}
                      />
                    }
                  />
                ),
              },
            ]}
          />
          <SafeAreaView style={defaultStyles.content}>
            <H4>
              Welcome to{' '}
              <H4 color={'primary'}>
                Fiji {userInfo && userInfo.user && userInfo.user.fName}
              </H4>
              .
            </H4>
          </SafeAreaView>
        </>
      )}
    </>
  );
};

export default Home;
