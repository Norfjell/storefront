import React from "react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

      <section className="mb-10 space-y-4 text-gray-700 leading-relaxed">
        <p>
          Welcome to <strong>Modern Threads</strong> – your destination for
          curated, high-quality fashion for men and women. We believe clothing
          should not only look good but feel good, too.
        </p>
        <p>
          Founded in 2024, our goal has been to make premium style accessible,
          sustainable, and simple to shop. Whether you’re dressing up for a
          night out or staying comfy at home, we’ve designed every piece with
          versatility and confidence in mind.
        </p>
        <p>
          Our storefront is more than just a product catalog — it’s a fully
          responsive, developer-built e-commerce demo powered by modern tools
          like <strong>React, Tailwind CSS, React Router</strong> and hosted on{" "}
          <strong>Vercel</strong>. This platform showcases my design thinking,
          frontend architecture, and UX focus.
        </p>
        <p>
          This project reflects my passion for clean code, performance-first
          design, and delightful customer experiences.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Style that feels like you</li>
          <li>Sustainability and ethical sourcing</li>
          <li>Simplicity, accessibility & usability</li>
          <li>Built with performance-first design in mind</li>
        </ul>
      </section>
    </div>
  );
}