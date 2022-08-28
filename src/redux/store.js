import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import { contactsApi } from './contacts/contacts';
import { filterSlice } from './contacts/filter';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: middleware,
});
