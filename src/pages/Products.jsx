import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams(); // Get category from URL

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          // If category is defined (e.g., "men" or "women"), filter it
          const filtered = category
            ? data.filter((product) => product.category === category)
            : data;
          setProducts(filtered);
          setLoading(false);
        }, 1000);
      });
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
        {category ? `${category}'s Products` : "All Products"}
      </h1>

      <div className="mb-6 space-x-4">
        <a href="/products" className="text-indigo-600 hover:underline">All</a>
        <a href="/products/men" className="text-indigo-600 hover:underline">Men</a>
        <a href="/products/women" className="text-indigo-600 hover:underline">Women</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}