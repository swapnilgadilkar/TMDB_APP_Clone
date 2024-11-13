import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useUserLoginMutation} from '../services/authService';
import {useAppDispatch} from '@store/store';
import {loginSuccess} from '../slices/authSlice';

const LoginScreen = () => {
  const [userLogin] = useUserLoginMutation();
  const [credentials, setCredentials] = useState({username: '', password: ''});
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    const {data, error} = await userLogin(credentials);
    if (data) {
      dispatch(loginSuccess({token: data.token, user: data.user}));
    } else {
      console.error('ERROR WHILE', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={credentials.username}
        onChangeText={text => setCredentials({...credentials, username: text})}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={credentials.password}
        onChangeText={text => setCredentials({...credentials, password: text})}
      />
      <Button title="Login" testID="login-btn" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
