import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <LanguageProvider>
          <App />
          <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
        </LanguageProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);