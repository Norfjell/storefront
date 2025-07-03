import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";
import { useLanguage } from "../context/LanguageContext";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";


export default function Hero() {
  const { language } = useLanguage();

  const translations = { en, fr, es };

  const t = translations[language]?.hero || translations.en.hero;

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{t.description}</p>
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium shadow hover:bg-indigo-700 transition"
          >
            {t.button}
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}