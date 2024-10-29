import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View>
    <Text>Home</Text>
  </View>
);

const HomeScreen1 = () => (
  <View>
    <Text>Home1</Text>
  </View>
);

const HomeScreen2 = () => (
  <View>
    <Text>Home2</Text>
  </View>
);

const SettingsScreen = () => (
  <View>
    <Text>Setting</Text>
  </View>
);

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Home1" component={HomeScreen1} />
      <Stack.Screen name="Home2" component={HomeScreen2} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'storefront-outline' : 'storefront-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-outline' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
