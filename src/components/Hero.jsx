import heroImage from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Upgrade Your Style with Modern Gear
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Shop our curated collection of high-performance products — built for comfort, style, and everyday adventure.
          </p>
          <Link
            to="/products"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium shadow hover:bg-indigo-700 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}