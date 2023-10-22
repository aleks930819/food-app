import { Blog, MetaData, QueryParams } from '@/types';

import { performRequest } from '@/utils/axios';

import queryString from 'query-string';

interface GetBlogsParams {
  query?: QueryParams;
}

interface BlogsResponse {
  blogs: Blog[];
  meta_data: MetaData;
}

const getBlogs = async ({ query }: GetBlogsParams = {}): Promise<BlogsResponse | undefined> => {
  console.log(query);
  if (!query) {
    query = {
      page: 1,
      limit: 10,
      order: 'desc',
    };
  }

  const queryStr = queryString.stringify(query);

  console.log(queryStr);

  try {
    const blogs = await performRequest<BlogsResponse>({
      endpoint: `/blogs?${queryStr}`,
    });

    console.log(blogs.blogs.length);
    return blogs;
  } catch (err) {
    return undefined;
  }
};

export default getBlogs;
