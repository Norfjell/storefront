import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import WeatherWidget from "./WeatherWidget";
import logo from "../assets/logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";

const translations = { en, fr, es };

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { language, setLanguage } = useLanguage();
  const t = translations[language]?.navbar || translations.en.navbar;

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
          <WeatherWidget />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-indigo-500">{t.home}</Link>
          <Link to="/products" className="hover:text-indigo-500">{t.products}</Link>
          <Link to="/about" className="hover:text-indigo-500">{t.about}</Link>
          <Link to="/contact" className="hover:text-indigo-500">{t.contact}</Link>
          <Link to="/cart" className="flex items-center hover:text-indigo-500 relative">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-indigo-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 focus:outline-none"
            aria-label={isMobileMenuOpen ? t.menuClose : t.menuOpen}
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

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 text-gray-700 font-medium">
          <Link to="/" className="block hover:text-indigo-500">{t.home}</Link>
          <Link to="/products" className="block hover:text-indigo-500">{t.products}</Link>
          <Link to="/products/men" className="block hover:text-indigo-500">{t.men}</Link>
          <Link to="/products/women" className="block hover:text-indigo-500">{t.women}</Link>
          <Link to="/about" className="block hover:text-indigo-500">{t.about}</Link>
          <Link to="/contact" className="block hover:text-indigo-500">{t.contact}</Link>
          <Link to="/cart" className="flex items-center hover:text-indigo-500 relative">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 left-3 bg-indigo-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
        </div>
      )}
    </nav>
  );
}