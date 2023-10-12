import { Product } from '@/types/types';
import { performRequest } from '@/utils/axios';

const getProducts = async () => {
  try {
    const products = await performRequest<Product[]>({
      endpoint: '/products',
    });
    return products;
  } catch (err) {
    return null;
  }
};

export default getProducts;
