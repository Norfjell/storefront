import Hero from "../components/Hero";
import ProductCarousel from "../components/ProductCarousel";
import CustomerReviews from "../components/CustomerReviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCarousel />
      <CustomerReviews />
    </div>
  );
}