"use client";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/services/authservices";
import authReducer from "./authSlice";
import { productApi } from "@/services/productservices";
import { categoryApi } from "@/services/categoryservice";
// import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    // products: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productApi.middleware, categoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
