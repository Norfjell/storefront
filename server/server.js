const express = require("express");
const Stripe = require("stripe");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Fallback image if item.image is invalid or missing
const FALLBACK_IMAGE_URL = "https://via.placeholder.com/300x300.png?text=Product+Image";

// Utility to check if a string is a valid HTTPS URL
function isValidImageURL(url) {
  return typeof url === "string" && /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|bmp|svg)/i.test(url);
}

app.post("/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map(item => {
        const name =
          typeof item.name === "string"
            ? item.name
            : item.name?.en || Object.values(item.name || {})[0] || "Unnamed Product";

        const image = isValidImageURL(item.image) ? item.image : FALLBACK_IMAGE_URL;

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name,
              images: [image],
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cart",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Checkout Error:", err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Stripe server running on port ${PORT}`));