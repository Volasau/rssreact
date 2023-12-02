import { configureStore } from '@reduxjs/toolkit';

import countriesSlice from '../data/country';
import formSlice from './formSlice';

export const store = configureStore({
  reducer: {
    form: formSlice,
    countries: countriesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
