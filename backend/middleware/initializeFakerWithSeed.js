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