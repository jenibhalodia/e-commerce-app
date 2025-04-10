import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Category {
  id: string;
  categoryName: string;
  description: string;
  code: string;
  status: string;
  createdOn: string;
  updatedAt: string;
}

interface AddCategoryRequest {
  categoryName: string;
  description: string;
  code: string;
  status: string;
}

interface DeleteCategoryRequest {
  ids: string[];
}

interface EditCategoryRequest{
  categoryName: string;
  description: string;
  code: string;
  status: string;
  id: string;
}

interface ApiResponse<T> {
  statusCode: number;
  data: T;
}

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.88:3002/api",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("loginToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategoryTable: builder.query<ApiResponse<Category[]>, void>({
      query: () => "/category",
    }),
    addCategory: builder.mutation<ApiResponse<Category>, AddCategoryRequest>({
      query: ({ categoryName, description, code, status }) => ({
        url: "/category/create-category",
        method: "POST",
        body: { categoryName, description, code, status },
      }),
    }),
    deleteCategoryTable: builder.mutation<ApiResponse<null>, DeleteCategoryRequest>({
      query: (ids) => ({
        url: "/category/delete-category",
        method: "POST",
        body: ids,
      }),
    }),
    editCategoryTable: builder.mutation<ApiResponse<Category>, EditCategoryRequest>({
      query: ({ categoryName, description, code, status, id }) => ({
        url: `/category/update-category/${id}`,
        method: "PUT",
        body: { categoryName, description, code, status },
      }),
    }),
  }),
});

export const {
  useGetCategoryTableQuery,
  useAddCategoryMutation,
  useDeleteCategoryTableMutation,
  useEditCategoryTableMutation
} = categoryApi;
