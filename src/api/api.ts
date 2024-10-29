import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
// import Config from 'react-native-config';
import {RootState} from '@store/store';

const BASE_URL = 'https://reqres.in/api';
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: headers => {
    // const {userDeviceGuid} = (getState() as RootState).auth;
    // console.log(getState, endpoint);
    // headers.set('authorization', '');
    return headers;
  },
});

export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
  | {
      error: E;
      data?: undefined;
      meta?: M;
    }
  | {
      error?: undefined;
      data: T;
      meta?: M;
    };

export type IReAuthResult = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
type ExtraOptions = {};
const baseQueryWithReFetchAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: ExtraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const accessToken = (api.getState() as RootState).auth.token;
    const {refreshToken} = (api.getState() as RootState).auth;
    const refreshResult = await baseQuery(
      {
        url: '',
        method: 'POST',
        body: {
          accessToken,
          refreshToken,
        },
      },
      api,
      extraOptions,
    );
    if (
      refreshResult
      // && (refreshResult as IReAuthResult).id &&
      // (refreshResult as IReAuthResult).token
    ) {
      // await authentication.login({ ...refreshResult } as IReAuthResult);
      // api.dispatch(setCredentials(refreshResult));
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(logout());
      // await authentication.logOut();
    }
  }
  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReFetchAuth,
  endpoints: () => ({}),
});
// const {BASE_URL} = Config;
export {apiSlice as api, BASE_URL};
