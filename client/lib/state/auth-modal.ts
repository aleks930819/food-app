import { create } from 'zustand';

interface AuthModalState {
  isOpen: boolean;
  showAuthModal: () => void;
  hideAuthModal: () => void;
}

export const useAuthModalState = create<AuthModalState>((set) => ({
  isOpen: false,
  showAuthModal: () => set({ isOpen: true }),
  hideAuthModal: () => set({ isOpen: false }),
}));
