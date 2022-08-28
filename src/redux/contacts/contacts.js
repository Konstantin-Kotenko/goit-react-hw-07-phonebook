import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApiUrl } from 'constants/baseUrl';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name,
          phone: number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
