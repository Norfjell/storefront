import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition duration-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-contain bg-gray-100"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          <div className="mt-2 font-bold text-indigo-600">${product.price}</div>
        </div>
      </div>
    </Link>
  );
}