import axios from "axios";
const API_URL = 'http://localhost:5000/api/books'
export const fetchBooks = async ({ pageParam, seed, lang, avgLikes,avgReviews }) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        seed,
        lang,
        avgLikes,
        avgReviews,
        page: pageParam, 
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching books:", error.message);
    throw new Error("Failed to fetch books");
  }
};
