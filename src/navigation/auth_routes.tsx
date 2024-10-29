import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@features/authentication/screens/LoginScreen';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
