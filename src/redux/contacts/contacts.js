import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';
import { baseApiUrl } from 'constants/baseUrl';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filterItems(state, action) {
      state.value = action.payload;
    },
  },
});

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

export const { filterItems } = filterSlice.actions;
export const getFilterValue = state => state.filter.value;

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
