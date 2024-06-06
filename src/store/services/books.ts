import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  endpoints: (builder) => ({
    getBestSellersList: builder.query<BookWithId[], void>({
      query: () =>
        `lists/best-sellers/history.json?api-key=${import.meta.env.VITE_API_KEY}`,
      transformResponse: (response: BooksApiResponse) => {
        // Add a unique ID to each book since api does not have any ids
        return response.results.map((book) => ({
          ...book,
          id: uuidv4(),
        }));
      },
    }),
  }),
});

export const { useGetBestSellersListQuery } = booksApi;
