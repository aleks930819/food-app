import React from 'react';
import Image from 'next/image';
import { Calendar, ChevronRight, Link, User } from 'lucide-react';
import { Blog } from '@/types';

const BlogCard = ({ blog }: { blog: Blog }) => {
  if (!blog) return null;
  return (
    <div className="  mb-28 px-2">
      <div className="w-full h-64 relative">
        <Image src={blog.image} alt="blog image" width={320} height={300} className="w-full h-full object-cover" />

        {/* CONTENT */}
        <div className="absolute -bottom-20 w-4/5 p-4 mx-auto left-0 right-0 bg-white shadow-md text-black text-center">
          <span className="flex justify-between items-center w-full">
            <time className="flex items-center gap-2">
              <Calendar size={20} className="text-primary-light" />
              {blog.createdAt}
            </time>
            <span className="flex items-center gap-2">
              <User size={20} className="text-primary-light" />
              {blog.createdFrom}
            </span>
          </span>

          <h2 className="mt-3 ">{blog.title.substring(0, 50) + '...'}</h2>
          <span className="w-1/2 mx-auto block h-1 bg-primary-light mt-2 mb-4" />
          {/* TODO: Find way its not showing the Link element */}
          <button
            // href={`/blogs/${blog.slug}`}
            className="text-primary-light px-4 py-2 font-bold   inline-flex items-center group"
          >
            Read More
            <ChevronRight
              size={18}
              className="ml-2 transition-all duration-500 ease-in-out group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
