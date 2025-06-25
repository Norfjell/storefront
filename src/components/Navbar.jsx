import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/src/assets/react.svg" alt="Logo" className="h-8" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-indigo-500">Home</Link>
          <Link to="/products" className="hover:text-indigo-500">Products</Link>
          <Link to="#" className="hover:text-indigo-500">About</Link>
          <Link to="#" className="hover:text-indigo-500">Contact</Link>
          <Link to="/cart" className="hover:text-indigo-500">
            🛒 Cart {cartCount > 0 && <span className="text-sm text-white bg-indigo-500 px-2 py-0.5 rounded-full ml-1">{cartCount}</span>}
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
          <Link to="/" className="block hover:text-indigo-500">Products</Link>
          <Link to="#" className="block hover:text-indigo-500">About</Link>
          <Link to="#" className="block hover:text-indigo-500">Contact</Link>
          <Link to="/cart" className="block hover:text-indigo-500">
            🛒 Cart {cartCount > 0 && <span className="ml-1 text-sm text-white bg-indigo-500 px-2 py-0.5 rounded-full">{cartCount}</span>}
          </Link>
        </div>
      )}
    </nav>
  );
}