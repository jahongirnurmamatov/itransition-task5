import seedrandom from 'seedrandom';
import faker from '@faker-js/faker';


function initializeFakerWithSeed(seed) {
  const rng = seedrandom(seed);
  faker.seed(rng());
}

