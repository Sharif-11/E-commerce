import { useContext } from "react";
import { NavLink } from "react-router";
import { CartContext } from "../Contexts/CartContext";
import CartIconWithBadge from "./CartIcon";

const Header = () => {
  const [cart] = useContext(CartContext);
  return (
    <div className="navbar bg-[rgb(135,89,78)] sticky top-0 z-[5]">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl text-white font-bold">
          E-commerce
        </NavLink>
      </div>
      <div className="flex-none font-bold text-white">
        <ul className="menu menu-horizontal px-12 gap-2">
          <li className="bg-transparent">
            <NavLink to="/products" className="text-white">
              Product List
            </NavLink>
          </li>
          <li className="bg-transparent focus:bg-transparent">
            <NavLink to="/cart" className="text-white">
              <CartIconWithBadge itemCount={cart.length} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
