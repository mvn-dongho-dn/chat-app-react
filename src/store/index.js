import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import roomReducer from './room';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer
  },
});