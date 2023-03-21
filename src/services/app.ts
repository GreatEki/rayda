import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { PayloadT } from "@/redux/types";
import { BASE_URL } from "./baseUrl";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<PayloadT[], undefined>({
      query: () => "/7f02819f-8254-410a-b8af-ab98572bd26b",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
