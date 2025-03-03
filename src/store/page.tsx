'use client'
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice";

 export const makeStore = () =>{
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
 } 


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
