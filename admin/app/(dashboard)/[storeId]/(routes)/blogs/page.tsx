import React from 'react';

import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';
import { BlogPageColumn } from '@/components/blogs/table/column';
import BlogClient from '@/components/blogs/blogs-client';

const BlogsPage = async ({ params }: { params: { storeId: string } }) => {
  const blogsPage = await prismadb.blog.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedBlogPages: BlogPageColumn[] = blogsPage.map((page) => ({
    id: page.id,
    title: page.title,
    createdBy: page.createdBy,
    slug: page.slug,
    createdAt: format(page.createdAt, 'MMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BlogClient data={formattedBlogPages} />
      </div>
    </div>
  );
};

export default BlogsPage;
