import { useState } from "react";
import { Product, addProductAsync, getProductsError } from "./Products.slice";
import { useAppDispatch } from "../../lib/store.hooks";
import { useSelector } from "react-redux";

const ProductsForm: React.FC = () => {

  const dispatch = useAppDispatch()

  const errorMessage = useSelector(getProductsError);

  const [products, setProducts] = useState<Product>({
    id: "",
    title: "",
    price: 0,
  });


  const handleChange = ({target: {name, value}} : React.ChangeEvent<HTMLInputElement>) => setProducts(prev => {
    (prev as any)[name] = value;
    const newValue = {...prev};
    return newValue;
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProductAsync(products))
  }


  const { id, title, price } = products;

  return (
    <>
      <h2>Add Game to the Store</h2>
      {errorMessage && <span>error: {errorMessage}</span>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Game title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input type="number" placeholder="Price" name="price" value={price} onChange={handleChange} />
        <input type="text" placeholder="id" name="id" value={id} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default ProductsForm;
