import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthRoutesParamList = {
  Login: undefined;
};

export type ProtectedRoutesParamList = {
  Home: undefined;
};

export type UserStackParamList = {
  Root: undefined;
  Home: undefined;
  Notification: undefined;
};

export type BottomTabsParamList = {
  Home: undefined;
};

export type DrawerNavigatorParamList = {
  SignInStack: undefined;
};

export type AuthRoutesScreenProps<T extends keyof AuthRoutesParamList> =
  NativeStackScreenProps<AuthRoutesParamList, T>;

export type ProtectedRoutesScreenProps<
  T extends keyof ProtectedRoutesParamList,
> = NativeStackScreenProps<ProtectedRoutesParamList, T>;

declare global {
  namespace ReactNavigation {
    type RootParamList = ProtectedRoutesParamList;
  }
}
