import React from 'react';
import { getBlogs } from '@/actions/get-blogs';

import LatestBlogSwipers from './latest-blogs-swiper';

const LatestBlogs = async () => {
  const blogs = await getBlogs();

  return (
    <div className="mt-20 max-w-6xl px-4 py-2 mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">Our Recent Blogs</h2>
        <p className="text-gray-600 text-base md:text-lg">Follow our latest articles</p>
      </div>
      <LatestBlogSwipers blogs={blogs} />
    </div>
  );
};

export default LatestBlogs;
