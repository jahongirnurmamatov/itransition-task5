import express from "express";


const app = express();

app.get("/api/books", (req, res) => {
  

  res.json({ books });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
