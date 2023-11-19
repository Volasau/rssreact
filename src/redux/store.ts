import { configureStore } from '@reduxjs/toolkit';
import { apiOne } from '../Api/reduxApi';
import planetSlice from './planetSlice';

export const store = configureStore({
  reducer: {
    planet: planetSlice,
    [apiOne.reducerPath]: apiOne.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiOne.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
