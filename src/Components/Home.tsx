import { useState } from "react";
import { Outlet } from "react-router";
import { CartContext } from "../Contexts/CartContext";
import { CartProduct } from "../Interfaces/products";
import Header from "./Header";

const Home = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  return (
    <div>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    </div>
  );
};

export default Home;
