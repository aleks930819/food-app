import { Product, QueryParams } from '@/types';
import { performRequest } from '@/utils/axios';

interface GetProductsParams {
  query?: QueryParams;
}

const getProducts = async ({ query }: GetProductsParams = {}): Promise<Product[] | null> => {
  const queryStr = new URLSearchParams(query as any).toString();

  try {
    const products = await performRequest<Product[]>({
      endpoint: `/products?${queryStr}`,
    });
    return products;
  } catch (err) {
    return null;
  }
};

export default getProducts;
