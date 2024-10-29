import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './bottom_tabs';
import {Text, View} from 'react-native';
const Drawer = createDrawerNavigator();

const NotificationsScreen = () => (
  <View>
    <Text>Notification</Text>
  </View>
);

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="BottomStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="BottomStack" component={BottomTabs} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
