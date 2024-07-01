import { create } from 'zustand';

export const useStore = create<StoreState>((set) => ({
  countryCode: '',
  games: [],
  setCountryCode: (code: string) => set({ countryCode: code }),
  setGames: (games) => set({ games }),
  reviews: [],
  setReviews: (reviews) => set({ reviews }),
}));
