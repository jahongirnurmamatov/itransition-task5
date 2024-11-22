import {faker} from '@faker-js/faker'
import seedrandom from 'seedrandom';
import { generateLikes, generateReviews, initializeFakerWithSeed } from './reviewLikeGen.js';

export function generateBooks(seed, lang, avgLikes = 0, avgReviews = 0,page = 1, pageSize = 10) {
    initializeFakerWithSeed(seed);
    faker.locale = lang || "en_US"
    console.log(seed,lang,avgLikes,avgReviews,page,pageSize)

    // generatting random seed with books to ensure the same books are fetched every time with same seed value
    const bookRng = seedrandom(`${seed}-books`);

    // Generate 10 random books with their respective details
    const books = Array.from({ length: 10 }).map((_, index) => {
      const globalIndex = (page - 1) * pageSize + index;
      //generate the same likes and reviews for the specific book to obtain this we create 
      // individual seed string to obtain tthe same values of like total user likes and reviews array
      const bookSeed = `${seed}-book-${globalIndex}`;
      const reviewSeed = `${bookSeed}-reviews`;

      // Generate book details
      const book = {
        title: faker.book.title(),
        author: faker.book.author(),
        isbn: faker.commerce.isbn(),
        publisher: faker.book.publisher(),
        likes: generateLikes(bookSeed, avgLikes),
        reviews: generateReviews(reviewSeed, avgReviews),
      };

      return book;
    });

    return books;
  }


  // console.log(generateBooks(12233,'de',3.4,2.3));