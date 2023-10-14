import { Blog } from '@/types/types';

import { performRequest } from '@/utils/axios';

const getSingleBlog = async ({ slug }: { slug: string }) => {
  try {
    const blog = await performRequest<Blog[]>({
      endpoint: `/blogs?slug=${slug}`,
    });
    return blog;
  } catch (err) {
    return null;
  }
};

export default getSingleBlog;
