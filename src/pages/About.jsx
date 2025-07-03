import React from "react";
import { useLanguage } from "../context/LanguageContext";

import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";

const translations = { en, fr, es };

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{t.title}</h1>

      <section className="mb-10 space-y-4 text-gray-700 leading-relaxed">
        {t.intro.map((para, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {t.valuesTitle}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {t.values.map((val, idx) => (
            <li key={idx}>{val}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}