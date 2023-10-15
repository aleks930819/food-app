import { create } from "zustand";

interface ViewModeState {
  viewMode: "grid" | "list";
  setGridView: () => void;
  setListView: () => void;
}

export const useViewModeStore = create<ViewModeState>((set) => ({
  viewMode: "grid",
  setGridView: () => set({ viewMode: "grid" }),
  setListView: () => set({ viewMode: "list" }),
}));
