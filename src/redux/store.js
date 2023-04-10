import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { usersReducer } from './usersSlice';

export const store = configureStore({
  reducer: { users: usersReducer },
  devTools: process.env.NODE_ENV === 'development',
});
