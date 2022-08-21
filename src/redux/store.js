import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { middleware } from './middleware';
import contacts, { contactsApi } from './contacts';

export const store = configureStore({
  reducer: {
    contacts,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
