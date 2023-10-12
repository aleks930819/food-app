import { getSingleBlog } from '@/actions';
import { Blog } from '@/types/types';
import { Timer, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const BlogDetailsPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;
  const blog = await getSingleBlog({ slug });

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { title, image, description, createdAt, createdFrom } = blog[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-2 mt-20">
      <section className="flex flex-col md:flex-row gap-4 ">
        <div className="w-full md:w-[70%]">
          <Image
            src={image}
            alt={title}
            width={840}
            height={600}
            className="object-cover rounded-md relative w-full h-64 transition-all duration-500 ease-in-out cursor-pointer"
          />
          {/* INFO */}
          <div className="py-6 flex items-center gap-4 border-b border-primary-light">
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
          <div className="py-3">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>

        <div className="w-full md:w-[30%] bg-red-500">gallery</div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
