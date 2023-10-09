import { Product } from '@/types/types';
import { fetchData } from '@/utils/axios';

export const getProducts = async () => {
  try {
    const products = fetchData({
      url: '/products',
    });
    return products as Promise<Product[]>;
  } catch (err) {
    return null;
  }
};
