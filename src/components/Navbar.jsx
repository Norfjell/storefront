import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src="/src/assets/react.svg" alt="Logo" className="h-8" />

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-indigo-500">Home</a>
          <a href="#" className="hover:text-indigo-500">Products</a>
          <a href="#" className="hover:text-indigo-500">About</a>
          <a href="#" className="hover:text-indigo-500">Contact</a>
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
          <a href="#" className="block hover:text-indigo-500">Home</a>
          <a href="#" className="block hover:text-indigo-500">Products</a>
          <a href="#" className="block hover:text-indigo-500">About</a>
          <a href="#" className="block hover:text-indigo-500">Contact</a>
        </div>
      )}
    </nav>
  );
}