import {Image, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Header, IconFamily} from '@brightlayer-ui/react-native-components';

const MenuIcon: IconFamily = {name: 'menu', direction: 'ltr'};

const Overview = ({navigation}: any) => {
  return (
    <>
      <Header
        title={'Overview'}
        icon={MenuIcon}
        onIconPress={(): void => {
          navigation.openDrawer();
        }}
      />
      <SafeAreaView style={styles.main}>
        <Image
          style={styles.logo}
          source={require('../assets/images/wallpaper.jpg')}
        />
      </SafeAreaView>
    </>
  );
};

export default Overview;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
  },
});
