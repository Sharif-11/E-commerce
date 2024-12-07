import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { CartContext } from "../Contexts/CartContext";
import CartIconWithBadge from "./CartIcon";

const Header = () => {
  const [cart] = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-[rgb(135,89,78)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-white text-2xl font-bold hover:text-gray-200 transition duration-300"
          >
            E-commerce
          </NavLink>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/products"
              className="text-white hover:bg-[rgba(255,255,255,0.2)] px-3 py-2 rounded-md transition duration-300"
            >
              Product List
            </NavLink>
            <NavLink
              to="/cart"
              className="text-white hover:bg-[rgba(255,255,255,0.2)] px-3 py-2 rounded-md transition duration-300 flex items-center"
            >
              <CartIconWithBadge itemCount={cart.length} />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[rgb(135,89,78)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/products"
              className="text-white block px-3 py-2 rounded-md hover:bg-[rgba(255,255,255,0.2)] transition duration-300"
              onClick={toggleMenu}
            >
              Product List
            </NavLink>
            <NavLink
              to="/cart"
              className="text-white block px-3 py-2 rounded-md hover:bg-[rgba(255,255,255,0.2)] transition duration-300 flex items-center"
              onClick={toggleMenu}
            >
              Cart <CartIconWithBadge itemCount={cart.length} />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
