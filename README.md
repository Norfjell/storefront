# React Mini Storefront

A modern e-commerce storefront built with React.js, Vite, and Tailwind CSS, featuring a mock product catalog, shopping cart with localStorage, responsive design, multi-language support, and real-time weather widget.

## Features

- Built with React + Vite
- Styled using Tailwind CSS
- Add to Cart functionality with quantity controls
- Cart persistence via localStorage
- Product detail pages with dynamic routing
- Product loading skeleton
- Navigation with mobile responsiveness
- Product recommendation carousel (mocked)
- Weather & location widget (OpenWeatherMap API)
- Newsletter form (frontend only)
- Multi-language support (i18n) using JSON files (EN, FR, ES)
- Language context with live switching
- Localized product data (per product translations)
- Fully responsive design

 Localization (i18n)
The app now supports multiple languages:

English (en)

French (fr)

Spanish (es)

Localized text is managed via JSON files in /locales, and product data is structured with per-language name and description fields.

Example structure:
{
  "id": 1,
  "name": {
    "en": "Running Shoes",
    "fr": "Chaussures de course",
    "es": "Zapatillas para correr"
  },
  "description": {
    "en": "Comfortable and stylish running shoes.",
    "fr": "Chaussures de course confortables et élégantes.",
    "es": "Zapatillas cómodas y con estilo para correr."
  },
  "price": 89.99,
  "category": "men",
  "image": "/images/shoes.jpg"
}
UI content like page titles, buttons, and messages is stored in:
src/locales/en.json
src/locales/fr.json
src/locales/es.json
Language is controlled via LanguageContext.

## 📂 Folder Structure

src/
- assets/ # Static images, logos
- components/ # Reusable components (Navbar, Footer, ProductCard, etc.)
- pages/ # Main pages (Home, ProductDetails, Cart)
- context/ # CartContext with useReducer
- locales/ # JSON files for i18n (en, fr, es)
- App.jsx # Main app layout
- main.jsx # Entry point

public/
- images/ # Product images
- products.json # Mock product data

## Tech Stack

- React.js (Vite)
- Tailwind CSS
- React Router
- React Icons
- OpenWeatherMap API
- LocalStorage
- JSON for mock data

## Getting Started

1. **Clone the repo**

git clone https://github.com/yourusername/storefront.git
cd storefront

2. **Install dependencies**
npm install

3. **Start the dev server**
npm run dev

4. **Build for production**
npm run build


Environment Variables
To use the weather widget, add a .env file in the root:
VITE_OPENWEATHER_API_KEY=your_api_key_here (you can get one from https://openweathermap.org/)

![Homepage screenshot](public/screenshots/homepage.png "Homepage")