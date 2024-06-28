import { create } from 'zustand';

export const useStore = create<StoreState>((set) => ({
  countryCode: '',
  setCountryCode: (code: string) => set({ countryCode: code }),
}));
