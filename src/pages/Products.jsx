import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";
import { useLanguage } from "../context/LanguageContext";


export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const LIMIT = 6;
  const { category } = useParams(); // Get category from URL
  const { language } = useLanguage();
  const t = { en, fr, es }[language]?.products || en.products;

  useEffect(() => {
    setLoading(true);
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = category
          ? data.filter((product) => product.category === category)
          : data;
        setAllProducts(filtered);
        setVisibleProducts(filtered.slice(0, LIMIT));
        setPage(1);
        setLoading(false);
      });
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleProducts, allProducts]);

  const loadMore = () => {
    const nextPage = page + 1;
    const nextProducts = allProducts.slice(0, nextPage * LIMIT);
    if (nextProducts.length > visibleProducts.length) {
      setVisibleProducts(nextProducts);
      setPage(nextPage);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
        {category ? t.title[category] : t.title.all}
      </h1>

      <div className="mb-6 space-x-4">
        <a href="/products" className="text-indigo-600 hover:underline">{t.filters.all}</a>
        <a href="/products/men" className="text-indigo-600 hover:underline">{t.filters.men}</a>
        <a href="/products/women" className="text-indigo-600 hover:underline">{t.filters.women}</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
          : visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      </div>
  );
}