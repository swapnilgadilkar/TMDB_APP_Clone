import {RootState, useAppDispatch, useAppSelector} from '@store/store';
import {loginSuccess, logout} from '../slices/authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state: RootState) => state.auth);

  const login = async credentials => {
    const {data, error} = await userLogin(credentials);
    if (data) {
      dispatch(loginSuccess({token: data.token, user: data.user}));
    } else {
      console.log('ERROR WHILE', error);
    }
  };

  const signOut = () => {
    dispatch(logout());
  };

  return {authState, login, signOut};
};
