import { useSelector } from "react-redux";
import { getCartSelector, getTotalPrice, removeFromCart } from "./Cart.slice";
import { useAppDispatch } from "../../lib/store.hooks";

const Cart: React.FC = () => {
  const cart = useSelector(getCartSelector);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useAppDispatch();

  const removeFromCartHandler = (id: string) => dispatch(removeFromCart(id));

  return (
    <div>
      <h2>Cart</h2>
      <h5>{totalPrice}</h5>
      {cart.map((product) => (
        <div key={product.id}>
          <span>{product.title}</span>{" - "}
          <span>{product.amount}</span>{" "}
          <button onClick={() => removeFromCartHandler(product.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
