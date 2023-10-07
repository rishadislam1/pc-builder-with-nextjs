import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pcbuildserver-git-main-freelancerrishad.vercel.app' }),
  tagTypes: ['pc'],
  endpoints: () => ({}),
});
