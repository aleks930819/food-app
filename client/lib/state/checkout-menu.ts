import { create } from 'zustand';

interface CheckoutMenu {
  isOpen: boolean;
  showCheckoutMenu: () => void;
  hideCheckoutMenu: () => void;
}

const useCheckoutMenu = create<CheckoutMenu>((set) => ({
  isOpen: false,
  showCheckoutMenu: () => set({ isOpen: true }),
  hideCheckoutMenu: () => set({ isOpen: false }),
}));

export default useCheckoutMenu;
