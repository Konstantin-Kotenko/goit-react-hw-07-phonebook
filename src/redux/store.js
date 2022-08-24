import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import { filterSlice, contactsApi } from './contacts';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: middleware,
});
