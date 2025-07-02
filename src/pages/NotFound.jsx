import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";

const translations = { en, fr, es };

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language]?.notFound || translations.en.notFound;
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.title}</h1>
      <p className="text-gray-600 mb-6">
        {t.message}
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {t.home}
      </Link>
    </div>
  );
}