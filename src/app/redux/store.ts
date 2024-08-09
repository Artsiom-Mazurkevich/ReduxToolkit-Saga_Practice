import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice'
export const store = configureStore({
  reducer: {
    orders: ordersReducer
  },
  devTools: true
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;