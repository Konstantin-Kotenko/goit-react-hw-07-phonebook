import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import { filterSlice, contactsApi } from './contacts/contacts';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: middleware,
});
