import { Product, QueryParams } from '@/types';
import { performRequest } from '@/utils/axios';

import queryString from 'query-string';

interface GetProductsParams {
  query?: QueryParams;
}

const getProducts = async ({ query }: GetProductsParams = {}): Promise<Product[] | null> => {
  if (!query) {
    query = {
      page: 1,
      limit: 10,
      sort: 'id',
      order: 'desc',
    };
  }

  const queryStr = queryString.stringify(query);

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
