import { RootState } from "@/lib/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
  title: string;
  price: number;
  id: string;
}

const initialState = [
  { title: "Escape from Tarkow", price: 60, id: "eft" },
  { title: "Hunt : Showdown", price: 75, id: "hunt" },
  { title: "Hell let loose", price: 55, id: "hll" },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      // return [action.payload, ...state];
      state.push(action.payload)
    },
    removeProduct : (state, action: PayloadAction<string>) => {
      return state.filter(product => product.id !== action.payload)
    }
  }
});

export const {addProduct, removeProduct} = productsSlice.actions;

export const getProductsSelector = (state: RootState) => state.products;

export default productsSlice.reducer;