import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: (builder) => ({
    getUserByUserId: builder.query({
      query: () => {
        return {
          url: 'pokemon',
          params: { limit: 5, offset: 0 },
        };
      },
    }),
  }),
});

export const { useGetUserByUserIdQuery } = usersApi;
