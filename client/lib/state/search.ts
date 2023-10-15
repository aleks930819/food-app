import { create } from "zustand";

interface SearchState {
  isOpen: boolean;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  openSearch: () => void;
  closeSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchValue: "",
  setSearchValue: (searchValue: string) => set({ searchValue }),
  isOpen: false,

  openSearch: () => set({ isOpen: true }),
  closeSearch: () => set({ isOpen: false }),
}));
