import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { useState } from "react";

import en from "../locales/en.json";
import fr from "../locales/fr.json";
import es from "../locales/es.json";

const translations = { en, fr, es };

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();
  const { language } = useLanguage();
  const currentLang = translations[language] ?? translations.en;
  const t = currentLang.cart ?? translations.en.cart;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [loading, setLoading] = useState(false);
  console.log(cartItems);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return; // guard if cart empty

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // redirect to Stripe checkout
      } else {
        alert(t.checkoutError || "Failed to create checkout session");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert(t.checkoutError || "Checkout error");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>

      {cartItems.length === 0 ? (
        <div className="text-gray-600">
          {t.empty}{" "}
          <Link to="/" className="text-indigo-600 hover:underline">
            {t.goShopping}
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name[language] || item.name.en}
                className="w-20 h-20 object-contain bg-gray-100"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name[language] || item.name.en}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>

                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline mt-2"
                >
                  {t.remove}
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-6 text-xl font-bold">
            {total >= 200 ? (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded border border-green-300 text-sm">
                {t.congrats} <strong>{t.freeShipping}</strong>!
              </div>
            ) : (
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded border border-yellow-300 text-sm">
                {t.spendMore} <strong>${(200 - total).toFixed(2)}</strong> {t.moreToFreeShipping} <strong>{t.freeShipping}</strong>!
              </div>
            )}
            <span>{t.total}</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="text-right">
            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? t.loading || "Processing..." : t.checkout}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}