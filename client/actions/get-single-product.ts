import { Product } from '@/types/types';

import { performRequest } from '@/utils/axios';

const getSingleProduct = async ({ slug }: { slug: string }) => {
  try {
    const product = await performRequest<Product[]>({
      endpoint: `/products?slug=${slug}`,
    });
    return product;
  } catch (err) {
    return null;
  }
};

export default getSingleProduct;
