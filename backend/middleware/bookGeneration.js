import {
  generateLikes,
  generateReviews,
  initializeFakerWithSeed,
} from "./reviewLikeGen.js";
import { allFakers } from "@faker-js/faker";

const locales = {
  en: "en_US",
  uz: "uz_UZ_latin",
  de: "de",
  ru: "ru",
  fr: "fr",
  es: "es",
  it: "it",
};

export function generateBooks(
  seed,
  lang,
  avgLikes = 0,
  avgReviews = 0,
  page,
  pageSize = 10
) {
  const locale = locales[lang] || "en_US";

  const faker = allFakers[locale];

  const combinedSeed = `${seed}-likes:${avgLikes}-reviews:${avgReviews}-page:${page}-${lang}`;

  initializeFakerWithSeed(combinedSeed);

  const books = Array.from({ length: pageSize }).map((_, index) => {
    const globalIndex = (page - 1) * pageSize + index;

    const bookSeed = `${combinedSeed}-book-${globalIndex}`;
    const reviewSeed = `${bookSeed}-reviews`;

    const book = {
      id: globalIndex + 1,
      title: faker.book.title(),
      author: faker.person.fullName(),
      isbn: faker.commerce.isbn(),
      publisher:
        lang === "en_US" ? faker.book.publisher() : faker.location.streetAddress(),
      likes: generateLikes(bookSeed, avgLikes),
      reviews: generateReviews(reviewSeed, avgReviews),
    };

    return book;
  });

  return books;
}
