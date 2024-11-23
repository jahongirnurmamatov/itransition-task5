import express from "express";
import { generateBooks } from "./middleware/bookGeneration.js";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(cors());
app.get("/api/books", (req, res) => {
  try {
    const { seed, lang = "en_Us", avgLikes, avgReviews, page } = req.query;

    if (!seed) {
      return res.status(400).json({ error: "Seed is required" });
    }
    const pageSize = Number(page) === 1 ? 20 : 10;

    const books = generateBooks(
      seed,
      lang,
      parseFloat(avgLikes),
      parseFloat(avgReviews),
      page,
      pageSize
    );

    res.json({ books });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} 

app.listen(5000, () =>
  console.log("Server running on http://localhost: ", PORT)
);
