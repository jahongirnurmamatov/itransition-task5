import seedrandom from 'seedrandom';
import { faker } from '@faker-js/faker'


export function initializeFakerWithSeed(seed) {
  const rng = seedrandom(seed);
  faker.seed(rng());
}

// to generate random review from the seed rng given
export function generateRandomReview(rng) {
    
    const rating = Math.floor(rng() * 5) + 1;
    const text = faker.lorem.sentence();
    const author = faker.person.fullName();

    return { rating, text, author };
}

// generating review arrays using the above function and using tthe seed
export function generateReviews(seed, averageReviews) {
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

  //generating likes for the farctional like value passed through slider input and seed value 
  export function generateLikes(seed, avgLikes) {
    const rng = seedrandom(seed);
  
    const integerLikes = Math.floor(avgLikes);
    const fractionalLikes = avgLikes - integerLikes;
  
    let likes = integerLikes;
    if (rng() < fractionalLikes) {
      likes += 1;
    }
  
    return likes;
  }

//   initializeFakerWithSeed(3123);
//   const rng = seedrandom(3123)
//   // console.log(generateRandomReview(rng))
// console.log(generateReviews(123,4.3))