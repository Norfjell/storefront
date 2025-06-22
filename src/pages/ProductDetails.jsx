import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8">Loading product...</div>;
  if (product === null) return <Navigate to="/not-found" replace />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-sm mb-4">
        <a href="/" className="text-indigo-600 hover:underline">
          ← Back to Products
        </a>
      </div>
      <div className="bg-white shadow rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-contain bg-gray-100"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-xl font-semibold text-indigo-600 mb-4">${product.price}</div>
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}