import { create } from 'zustand';

export const useStore = create<StoreState>((set) => ({
  games: [],
  setGames: (games) => set({ games }),
  reviews: [],
  setReviews: (reviews) => set({ reviews }),
}));
