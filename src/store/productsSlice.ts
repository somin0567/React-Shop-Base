import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CONSTANTS from "../constants/constants";

const productsURL = `${
  CONSTANTS.IS_DEV ? "/proxy" : import.meta.env.VITE_FAKE_STORE_API
}/products`;

export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
  readonly rating: { rate: number; count: number };
}

export const fetchProducts = createAsyncThunk<IProduct[]>(
  "products/fetchProducts",
  async () => (await axios.get(productsURL)).data,
);

const initialState = {
  items: [] as IProduct[],
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
