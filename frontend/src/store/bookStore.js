import { create } from "zustand";

const useAppState = create((set) => ({
  seed: "defaultSeed",
  lang: "en",
  averageLikes: 3.5,
  averageReviews: 4.2,
  setSeed: (seed) => set({ seed }),
  setRegion: (region) => set({ region }),
  setAverageLikes: (likes) => set({ averageLikes: likes }),
  setAverageReviews: (reviews) => set({ averageReviews: reviews }),
}));

export default useAppState;
