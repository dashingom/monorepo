import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerNavGroup,
  NavItem,
} from '@brightlayer-ui/react-native-components';
import React, {useState, useCallback} from 'react';
import * as Colors from '@brightlayer-ui/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './index';

export const navGroupItems: NavItem[] = [
  {
    title: 'Home',
    itemID: 'Home',
    icon: {name: 'home'},
  },
  {
    title: 'Overview',
    itemID: 'Overview',
    icon: {name: 'dashboard'},
  },
];

export type NavDrawerProps = {
  navigation: StackNavigationProp<RootStackParamList, 'NavigationDrawer'>;
};

export const NavigationDrawer: React.FC<NavDrawerProps> = ({navigation}) => {
  const [selected, setSelected] = useState('Home');
  const selectItem = useCallback(
    id => {
      navigation.navigate(id);
      setSelected(id);
    },
    [navigation],
  );

  return (
    <Drawer
      activeItem={selected}
      onItemSelect={(id: string): void => selectItem(id)}>
      <DrawerHeader
        title={'Brightlayer UI'}
        subtitle={'React Native Project'}
        fontColor={Colors.white[50]}
        icon={{name: 'menu'}}
        onIconPress={(): void => {
          navigation.closeDrawer();
        }}
      />
      <DrawerBody>
        <DrawerNavGroup items={navGroupItems} hidePadding={false} />
      </DrawerBody>
    </Drawer>
  );
};
