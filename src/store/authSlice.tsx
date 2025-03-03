'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  email: string | null;
  token: string | null;
  status: boolean;
}

const initialState: AuthState = {
  email: null,
  token: null,
  status: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.status = true;
    },
    logout: (state) => {
      state.email = null;
      state.token = null;
      state.status = false;
    },
    register: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.status = true;
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
