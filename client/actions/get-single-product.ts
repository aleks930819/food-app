import { Product } from '@/types';

import { performRequest } from '@/utils/axios';

const getSingleProduct = async ({ productId }: { productId: string }) => {
  try {
    const product = await performRequest<Product | undefined>({
      endpoint: `/products/${productId}`,
    });
    return product;
  } catch (err) {
    return undefined;
  }
};

export default getSingleProduct;
