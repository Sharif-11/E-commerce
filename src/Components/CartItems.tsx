import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./CartItem";

const CartItems = () => {
  const [cart] = useContext(CartContext);
  return (
    <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            price={product.price}
            name={product.title.substring(0, 16)}
            url={product.url}
            quantity={product.quantity}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
