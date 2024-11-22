import express from "express";
import { generateBooks } from "./middleware/bookGeneration.js";
import cors from "cors";


const app = express();
app.use(cors());
app.get("/api/books", (req, res) => {
  const {
    seed,
    lang = "en_Us",
    likes,
    reviews,
  } = req.query;

  if (!seed) {
    return res.status(400).json({ error: "Seed is required" });
  }

  const books = generateBooks(
    seed,
    lang,
    parseFloat(likes),
    parseFloat(reviews)
  );

  res.json({ books });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
