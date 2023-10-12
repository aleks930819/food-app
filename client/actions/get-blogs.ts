import { Blog } from '@/types/types';

import { performRequest } from '@/utils/axios';

const getBlogs = async () => {
  try {
    const blogs = await performRequest<Blog[]>({
      endpoint: '/blogs',
    });
    return blogs;
  } catch (err) {
    return null;
  }
};

export default getBlogs;
