import {faker} from '@faker-js/faker'
import { generateLikes, generateReviews, initializeFakerWithSeed } from './reviewLikeGen.js';

export function generateBooks(
  seed,
  lang,
  avgLikes = 0,
  avgReviews = 0,
  page,
  pageSize = 10
) {
  // Combine seed with avgLikes and avgReviews to make it unique
  const combinedSeed = `${seed}-likes:${avgLikes}-reviews:${avgReviews}-page:${page}`;
  
  initializeFakerWithSeed(combinedSeed); // Initialize faker with the combined seed
  faker.locale = lang || "en_US";

  // Generate books with the modified seed
  const books = Array.from({ length: pageSize }).map((_, index) => {
    const globalIndex = (page - 1) * pageSize + index;

    const bookSeed = `${combinedSeed}-book-${globalIndex}`;
    const reviewSeed = `${bookSeed}-reviews`;

    const book = {
      id: globalIndex+1,
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

