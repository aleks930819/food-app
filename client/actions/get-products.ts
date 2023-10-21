import { MetaData, Product, QueryParams } from '@/types';
import { performRequest } from '@/utils/axios';

import queryString from 'query-string';

interface GetProductsParams {
  query?: QueryParams;
}

interface ProductsResponse {
  products: Product[];
  meta_data: MetaData;
}

const getProducts = async ({ query }: GetProductsParams = {}): Promise<ProductsResponse | undefined> => {
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
    const products = await performRequest<ProductsResponse>({
      endpoint: `/products?${queryStr}`,
    });
    return products;
  } catch (err) {
    return undefined;
  }
};

export default getProducts;
