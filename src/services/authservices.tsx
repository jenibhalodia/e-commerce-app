import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
  statusCode: number;
  message: string;
  data: {
    token: string;
  };
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  statusCode: number;
  message: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.88:3001/api" }),
  endpoints: (builder) => ({
    login: builder.mutation< LoginResponse, LoginRequest>({
      query: ({ email, password }) => ({
        url: "/users/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query:({ firstName, lastName, email, password })=>({
        url: "/users/register",
        method: "POST",
        body:{ firstName, lastName, email, password }
      })
    })
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
