import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";

import { productsApi } from "src/services/app";
import appReducer from "src/features/appSlice";

export const store: Store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
