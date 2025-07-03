import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function ProductCard({ product }) {
  const { language } = useLanguage();
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition duration-200">
        <img
          src={product.image}
          alt={product.name?.[language] || product.name?.en}
          className="h-48 w-full object-contain bg-gray-100"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{product.name?.[language] || product.name?.en}</h2>
          <p className="text-gray-600 text-sm mt-1">{product.description?.[language] || product.description?.en}</p>
          <div className="mt-2 font-bold text-indigo-600">${product.price}</div>
        </div>
      </div>
    </Link>
  );
}