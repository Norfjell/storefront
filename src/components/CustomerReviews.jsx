import React from "react";

const testimonials = [
  {
    name: "Sarah M.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Absolutely love the quality! Shipping was super fast and the fit is perfect. Will definitely buy again.",
  },
  {
    name: "James P.",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    review:
      "Great experience! The site is smooth and intuitive. The customer service team was also very helpful.",
  },
  {
    name: "Emily R.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "Stylish and comfortable — just what I was looking for. The design feels premium and well-made.",
  },
];

export default function CustomerReviews() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Are Saying
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-600"
              />
              <p className="font-semibold text-gray-900">{t.name}</p>
            </div>
            <p className="text-gray-700 italic">“{t.review}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}