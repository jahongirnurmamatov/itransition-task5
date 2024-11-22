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

  if (!faker) {
    throw new Error(`Unsupported language: ${lang}`);
  }
  //  generating very specific case of seed to ensure every change in input results in change of books
  const combinedSeed = `${seed}-likes:${avgLikes}-reviews:${avgReviews}-page:${page}-${lang}`;
  // we pass the locale-specific faker instance to initializeFakerWithSeed
  initializeFakerWithSeed(combinedSeed, faker);

  const books = Array.from({ length: pageSize }).map((_, index) => {
    const globalIndex = (page - 1) * pageSize + index;

    const bookSeed = `${combinedSeed}-book-${globalIndex}`;
    const reviewSeed = `${bookSeed}-reviews`;

    const book = {
      id:  globalIndex + 1,
      title: lang === "en" ?  faker.book.title() :faker.lorem.sentence(({ min: 1, max: 4 }) ) ,
      author: faker.person.fullName(),
      isbn: faker.commerce.isbn(),
      publisher:
        lang === "en_US" ? faker.book.publisher() : faker.location.streetAddress(),
      likes: generateLikes(bookSeed, avgLikes),
      reviews: generateReviews(reviewSeed, avgReviews, faker),
    };

    return book;
  });

  return books;
}
