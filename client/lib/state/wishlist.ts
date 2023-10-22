import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/types';

interface WishListStore {
  items: Product[];
  // eslint-disable-next-line no-unused-vars
  addItem: (data: Product) => void;
  // eslint-disable-next-line no-unused-vars
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useWishList = create(
  persist<WishListStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error('Item already in the wishlist.');
        }

        set({ items: [...get().items, data] });
        toast.success(`${data.name} added to the wishlist.`);
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => Number(item.id) !== Number(id))] });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'wishlist',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useWishList;
