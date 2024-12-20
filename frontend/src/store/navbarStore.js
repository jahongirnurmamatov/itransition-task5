import { create } from "zustand";

const useNavStore = create((set) => ({
  seed: 1,
  lang: "en",
  averageLikes: 3.5,
  averageReviews: 4.2,
  grid:'row',
  setGrid: (view) => set(() => ({ grid: view })),
  setSeed: (seed) => set({ seed }),
  setLang: (lang) => set({ lang }),
  setAverageLikes: (likes) => set({ averageLikes: likes }),
  setAverageReviews: (reviews) => set({ averageReviews: reviews }),
}));

export default useNavStore;