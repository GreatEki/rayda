import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PayloadT } from "@/redux/types";

interface State {
  products: PayloadT[];
}

export const INITIAL_STATE: State = {
  products: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    fetchProducts: (state, action: PayloadAction<PayloadT[]>) => {
      state.products = action.payload;
    },
  },
});

export const { fetchProducts } = appSlice.actions;
export default appSlice.reducer;
