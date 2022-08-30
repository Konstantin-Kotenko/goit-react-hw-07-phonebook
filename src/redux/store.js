import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import { rootReducer } from './contacts/contacts';

export const store = configureStore(
    rootReducer,
  middleware: middleware,
});
