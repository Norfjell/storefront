import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import WeatherWidget from "./WeatherWidget";
import logo from "../assets/logo.svg";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
          <WeatherWidget />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-indigo-500">Home</Link>
          <Link to="/products" className="hover:text-indigo-500">Products</Link>
          <Link to="#" className="hover:text-indigo-500">About</Link>
          <Link to="/contact" className="hover:text-indigo-500">Contact</Link>
          <Link to="/cart" className="flex items-center hover:text-indigo-500 relative">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-indigo-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 text-gray-700 font-medium">
          <Link to="/" className="block hover:text-indigo-500">Home</Link>
          <Link to="/products" className="block hover:text-indigo-500">Products</Link>
          <Link to="#" className="block hover:text-indigo-500">About</Link>
          <Link to="/contact" className="block hover:text-indigo-500">Contact</Link>
          <Link to="/cart" className="flex items-center hover:text-indigo-500 relative">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 left-3 bg-indigo-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}