import React from 'react';

import prismadb from '@/lib/prismadb';
import BlogForm from '@/components/blogs/form/blogs-form';

const BlogPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const blogArticle = await prismadb.blog.findUnique({
    where: {
      slug: params.slug,
    },

    include: {
      images: true,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BlogForm initialData={blogArticle} />
      </div>
    </div>
  );
};

export default BlogPage;
