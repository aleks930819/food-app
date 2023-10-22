import { create } from 'zustand';

interface AuthModalState {
  isOpen: boolean;
  showAuthModal: () => void;
  hideAuthModal: () => void;
}

const useAuthModalState = create<AuthModalState>((set) => ({
  isOpen: false,
  showAuthModal: () => set({ isOpen: true }),
  hideAuthModal: () => set({ isOpen: false }),
}));

export default useAuthModalState;
