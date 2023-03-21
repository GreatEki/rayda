import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Product } from "src/redux/types";
import { BASE_URL } from "./baseUrl";

interface Payload {
  data: Product[];
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<Payload, undefined>({
      query: () => "/7f02819f-8254-410a-b8af-ab98572bd26b",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
