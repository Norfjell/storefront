import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";
import { useLanguage } from "../context/LanguageContext";

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const translations = { en, fr, es };
  const { language } = useLanguage();
  const t = translations[language]?.carousel || translations.en.carousel;

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
         {t.title}
      </h2>

      {products.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-7xl mx-auto px-4"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">Loading products...</p>
      )}
    </section>
  );
}