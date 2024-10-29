import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedRoutes from './protected_routes';
import AuthRoutes from './auth_routes';
import {useAppSelector} from '@store/store';

const Routes = () => {
  const isAuthenticated = useAppSelector(state => state?.auth?.isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <ProtectedRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
