import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="navbar bg-[rgb(135,89,78)]">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl text-white font-bold">
          E-commerce
        </NavLink>
      </div>
      <div className="flex-none font-bold text-white">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/products" className="text-white">
              Product List
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="text-white">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
