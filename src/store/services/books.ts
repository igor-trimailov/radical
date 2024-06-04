import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  endpoints: (builder) => ({
    getBestSellersList: builder.query<BooksApiResponse, NoArg>({
      query: () => `lists/best-sellers/history.json?api-key=${process.env.API_KEY}`,
    }),
  }),
});

export const { useGetBestSellersListQuery } = booksApi;
