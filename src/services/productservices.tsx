import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getProductId } from "./page";

interface Product {
  price: number;
  category: string;
  id: string;
  inStock: boolean;
  productName: string;
  description: string;
  imageURL: string;
}

interface GetProductsResponse {
  length: number;
  data: Product[];
  statusCode: number;
}
interface GetProductByIdResponse {
  inStock: any;
  data: Product;
  statusCode: number;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.88:3002/api",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("loginToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, void>({
      query: () => "/products",
    }),
    getProductById: builder.query<GetProductByIdResponse, string>({
        query: (_id) => `/products/${_id}`
    })
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
