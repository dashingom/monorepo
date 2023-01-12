import React, {ReactNode} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavDrawerProps, NavigationDrawer} from './navigation-drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Overview from '../screens/Overview';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
  Home: undefined;
  NavigationDrawer: undefined;
  Overview: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const CustomDrawerContent = (props: any): any => (
  <NavigationDrawer {...props} />
);

export const MainRouter = (): any => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props: NavDrawerProps): ReactNode => (
      <CustomDrawerContent {...props} />
    )}>
    <RootStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Overview"
      component={Overview}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);
