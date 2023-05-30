import React from "react";
import { Product, getProductsSelector, removeProduct } from "./Products.slice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./store.hooks";
import { getCartSelector, addToCart } from "../Cart/Cart.slice";

const ProductsList: React.FC= () => {
  const products = useSelector(getProductsSelector);
  const dispatch = useAppDispatch();

  // const cart = useSelector(getCartSelector);

  const removeFromStore = (id: string) => {
    dispatch(removeProduct(id));
  }

  const addToCartHandler = (product : Product) => {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <h2>Games list</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
          <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
          <button onClick={() => removeFromStore(product.id)}>Remove from store</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
