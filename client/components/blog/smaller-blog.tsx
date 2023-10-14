import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Calendar } from 'lucide-react';

import { Blog } from '@/types/types';

const SmallerBlog = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`} className="mb-3 flex items-center gap-2">
      <figure className="w-16 h-16 relative">
        <Image src={blog.image} alt={blog.title} width={60} height={60} className="object-cover w-full h-full" />
      </figure>
      <div>
        <h3>{blog.title.substring(0, 20) + '...'}</h3>
        <time className="flex items-center gap-1">
          <Calendar size={14} className="text-primary-light" />
          <span className="text-gray-400 text-sm">{blog.createdAt}</span>
        </time>
      </div>
    </Link>
  );
};

export default SmallerBlog;
