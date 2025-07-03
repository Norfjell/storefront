import React from "react";
import { useLanguage } from "../context/LanguageContext";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";


export default function CustomerReviews() {
  const { language } = useLanguage();
  const translations = { en, fr, es };
  const localizedTestimonials = translations[language]?.reviews?.testimonials || translations.en.reviews.testimonials;
  const title = translations[language]?.reviews?.title || translations.en.reviews.title;

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        {title}
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {localizedTestimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-600"
              />
              <p className="font-semibold text-gray-900">{t.name}</p>
            </div>
            <p className="text-gray-700 italic">“{t.review}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}