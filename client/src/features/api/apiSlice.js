import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 'https://buyit-react.herokuapp.com';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
	tagTypes: ['Product', 'Sale'],
	endpoints: builder => ({}),
});
