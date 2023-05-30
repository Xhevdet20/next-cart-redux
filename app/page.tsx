"use client";

import ProductsForm from "@/Components/Products/ProductsForm";
import ProductsList from "@/Components/Products/ProductsList";
import { Provider } from "react-redux";
import store from "../lib/store";
import Cart from "@/Components/Cart/Cart";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <ProductsList />
        <ProductsForm />
        <Cart />
      </div>
    </Provider>
  );
}
 