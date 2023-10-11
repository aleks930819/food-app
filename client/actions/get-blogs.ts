import { Blog } from '@/types/types';

import { performRequest } from '@/utils/axios';

export const getBlogs = async () => {
  try {
    const blogs = await performRequest<Blog[]>({
      endpoint: '/blogs',
    });
    return blogs;
  } catch (err) {
    return null;
  }
};
