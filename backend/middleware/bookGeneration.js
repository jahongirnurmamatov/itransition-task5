import {faker} from '@faker-js/faker'
import seedrandom from 'seedrandom';
import { generateLikes, generateReviews, initializeFakerWithSeed } from './reviewLikeGen.js';

export function generateBooks(
  seed,
  lang,
  avgLikes = 0,
  avgReviews = 0,
  page = 1,
  pageSize = 10
) {
  // Combine seed with avgLikes and avgReviews to make it unique
  const combinedSeed = `${seed}-likes:${avgLikes}-reviews:${avgReviews}`;
  
  initializeFakerWithSeed(combinedSeed); // Initialize faker with the combined seed
  faker.locale = lang || "en_US";

  // Generate books with the modified seed
  const books = Array.from({ length: pageSize }).map((_, index) => {
    const globalIndex = (page - 1) * pageSize + index;

    const bookSeed = `${combinedSeed}-book-${globalIndex}`;
    const reviewSeed = `${bookSeed}-reviews`;

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



  console.log("Books with seed 'seed1':");
  console.log(generateBooks("seed1", "en_US", 3.4, 2.3, 1, 10));
  
  console.log("\nBooks with seed 'seed2':");
  console.log(generateBooks("seed2", "fr", 4.5, 1.2, 2, 5));