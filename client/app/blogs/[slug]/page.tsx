import Image from 'next/image';
import React from 'react';

import { Timer, User } from 'lucide-react';

import { getBlogs, getSingleBlog } from '@/actions';

import { BlogGallery, SmallerBlog } from '@/components/blog';
import NotFound from '@/app/not-found';

const BlogDetailsPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;
  const blog = await getSingleBlog({ slug });
  const blogs = await getBlogs();

  if (!blog || blog.length === 0) {
    return <NotFound />;
  }

  const { title, image, description, createdAt, createdFrom, gallery } = blog[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-2 mt-20">
      <section className="flex flex-col md:flex-row gap-10 ">
        <div className="w-full md:w-[70%]">
          <Image
            src={image}
            alt={title}
            width={840}
            height={600}
            className="object-cover rounded-md relative w-full h-64 hover-duration-500  cursor-pointer"
          />
          {/* INFO */}
          <div className="py-6 flex items-center gap-4 border-b-2  border-primary-light">
            <span className="flex items-center gap-1">
              <Timer size={20} className="text-primary-light" />
              <time className="text-gray-400 text-sm">{createdAt}</time>
            </span>
            <span className="flex items-center gap-1">
              <User size={20} className="text-primary-light" />
              <p className="text-gray-400 text-sm">{createdFrom}</p>
            </span>
          </div>

          {/* CONTENT */}
          <article className="py-3">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-gray-400">{description}</p>
          </article>
        </div>

        {/* RIGHT ASIDE */}
        <aside className="w-full px-2 py-4 md:w-[30%] ">
          <p className="text-2xl font-bold mb-4">
            Gallery
            <span className="bg-primary-light w-12 block mb-2 mt-1 h-[2px]" />
          </p>
          <BlogGallery gallery={gallery} />
          <p className="text-2xl font-bold mb-4">
            Recent blogs
            <span className="bg-primary-light w-12 block mb-2 mt-1 h-[2px]" />
          </p>
          {blogs?.map((blog) => <SmallerBlog blog={blog} key={blog.id} />)}
        </aside>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
