import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const useCart = (id: number) => {
  const [cart, setCart] = useContext(CartContext);
  const removeItem = () => {
    const filteredCart = cart.filter((product) => product.id !== id);
    setCart(filteredCart);
  };
  const increaseQuantity = () => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };
  const decreaseQuantity = () => {
    const existingProduct = cart.find((product) => product.id === id);
    if (existingProduct?.quantity === 1) {
      const updatedCart = cart.filter((product) => product.id !== id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setCart(updatedCart);
    }
  };
  return { removeItem, increaseQuantity, decreaseQuantity };
};
export default useCart;
