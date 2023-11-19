import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiOne = createApi({
  reducerPath: 'apiOne',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/',
  }),
  endpoints: (builder) => ({
    getOne: builder.query({
      query: ({
        searchQuery,
        page,
      }: {
        searchQuery: string | null;
        page: number;
      }) =>
        `planets/?page=${page}${searchQuery ? `&search=${searchQuery}` : ''}`,
    }),
    fetchPlanetBy: builder.query({
      query: (planetId: string) => `planet/${planetId}`,
    }),
  }),
});

export const { useGetOneQuery, useFetchPlanetByQuery } = apiOne;
