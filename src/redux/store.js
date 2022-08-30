import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import { rootReducer } from './contacts/contacts';

export const store = configureStore({
    reducer:{rootReducer,},
  middleware: middleware,
});
