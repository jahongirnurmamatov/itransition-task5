import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

export const fetchBooks = async ({ pageParam = 1, seed, region, likes, reviews }) => {
    const { data } = await axios.get(API_URL, {
      params: {
        page: pageParam,
        pageSize: 10,
        seed,
        region,
        likes,
        reviews,
      },
    });
    return data;
  };