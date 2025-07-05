import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";

const translations = { en, fr, es };

export default function SuccessPage() {
  const { clearCart } = useCart();
  const { language } = useLanguage();
  const currentLang = translations[language] ?? translations.en;
  const t = currentLang.success ?? translations.en.success;

  useEffect(() => {
    clearCart();
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">{t.thankYou}</h1>
        <p className="text-lg text-gray-700 mb-6">{t.confirmation}</p>
        <Link
          to="/products"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          {t.continueShopping}
        </Link>
      </div>
    </div>
  );
}