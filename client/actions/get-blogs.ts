import { Blog, QueryParams } from '@/types';

import { performRequest } from '@/utils/axios';

import queryString from 'query-string';

interface GetBlogsParams {
  query?: QueryParams;
}

const getBlogs = async ({ query }: GetBlogsParams = {}): Promise<Blog[] | undefined> => {
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
    const blogs = await performRequest<Blog[]>({
      endpoint: `/blogs?${queryStr}`,
    });
    return blogs;
  } catch (err) {
    return undefined;
  }
};

export default getBlogs;
