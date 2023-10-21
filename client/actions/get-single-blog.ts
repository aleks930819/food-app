import { Blog } from '@/types';

import { performRequest } from '@/utils/axios';

const getSingleBlog = async ({ slug }: { slug: string }) => {
  try {
    const blog = await performRequest<Blog>({
      endpoint: `/blogs/${slug}`,
    });
    return blog;
  } catch (err) {
    return undefined;
  }
};

export default getSingleBlog;
