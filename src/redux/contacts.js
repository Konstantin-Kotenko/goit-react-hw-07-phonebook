import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove(state, action) {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
    filterItems(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export default persistReducer(persistConfig, contactsSlice.reducer);

export const { add, remove, filterItems } = contactsSlice.actions;

export const getItemsValue = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://630260e5c6dda4f287b8c052.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        invalidatesTags: ['Contact'],
      }),
    }),
  }),
});

export const { useGetContactsQuery, useDeleteContactMutation } = contactsApi;
