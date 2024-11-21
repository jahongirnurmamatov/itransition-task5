import seedrandom from 'seedrandom';
import faker from '@faker-js/faker';


function initializeFakerWithSeed(seed) {
  const rng = seedrandom(seed);
  faker.seed(rng());
}

// to generate random review from the seed rng given
function generateRandomReview(rng) {
    const rating = Math.floor(rng() * 5) + 1;
    const text = faker.lorem.sentence();
    const author = faker.name.findName();

    return { rating, text, author };
}

// generating review arrays using the above function and using tthe seed
function generateReviews(seed, averageReviews) {
    const rng = seedrandom(seed); // Seed the random number generator
  
    const integerReviews = Math.floor(averageReviews);
    const fractionalReview = averageReviews - integerReviews;
  
    const reviews = [];
    for (let i = 0; i < integerReviews; i++) {
      reviews.push(generateRandomReview(rng));
    }
  
    if (rng() < fractionalReview) {
      reviews.push(generateRandomReview(rng));
    }
  
    return reviews;
  }