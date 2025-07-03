import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import contactBanner from "../assets/hero-contact.jpg";

import { useLanguage } from "../context/LanguageContext";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";

const translations = { en, fr, es };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const { language } = useLanguage();
  const t = translations[language]?.contact || translations.en.contact;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCaptcha = (value) => {
    if (value) setCaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert(t.captchaAlert);
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    recaptchaRef.current.reset();
  };

  return (
    <div>
      {/* Banner Hero */}
      <div
        className="relative h-[45vh] object-cover bg-center"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{t.title}</h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        {submitted ? (
          <div className="bg-green-100 text-green-800 px-4 py-3 rounded shadow">
            {t.thankYou}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                {t.name}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                {t.email}
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                {t.message}
              </label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <ReCAPTCHA
              sitekey={import.meta.env.VITE_ReCAPTCHA_SITE_KEY}
              onChange={handleCaptcha}
              ref={recaptchaRef}
            />

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              {t.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}