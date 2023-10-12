import { Category } from '@/types/types';

import { performRequest } from '@/utils/axios';

const getCategories = async () => {
  try {
    const categories = await performRequest<Category[]>({
      endpoint: '/categories',
    });
    return categories;
  } catch (err) {
    return null;
  }
};

export default getCategories;
