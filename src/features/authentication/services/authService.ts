import {api} from '@api/api';

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    userLogin: builder.mutation({
      query: ({email = 'eve.holt@reqres.in', password = 'cityslicka'}) => ({
        url: 'login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const {useUserLoginMutation} = authApi;
