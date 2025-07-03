import { FaInstagram, FaYoutube, FaStrava } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";


export default function Footer() {
  const { language } = useLanguage();
  const translations = { en, fr, es };
  const t = translations[language]?.footer || translations.en.footer;

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{t.subscribeHeading}</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="px-3 py-2 rounded-md bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md"
            >
              {t.subscribeButton}
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <a href="#" className="hover:text-indigo-400">{t.privacy}</a>
          <a href="#" className="hover:text-indigo-400">{t.terms}</a>
          <a href="/contact" className="hover:text-indigo-400">{t.contact}</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 justify-start md:justify-end">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaYoutube size={24} />
          </a>
          <a href="https://strava.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            <FaStrava size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} React Storefront. {t.copyright}
      </div>
    </footer>
  );
}