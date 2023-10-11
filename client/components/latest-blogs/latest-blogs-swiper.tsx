'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Blog } from '@/types/types';

import BlogCard from './blog-card';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const LatestBlogSwipers = ({ blogs }: { blogs: Blog[] | null }) => {
  if (!blogs) return null;

  if (!blogs) return null;

  return (
    <Swiper spaceBetween={20} slidesPerView={3} modules={[Pagination]} pagination={{ clickable: true }}>
      {blogs.map((blog: Blog) => (
        <SwiperSlide className="w-full px-2">
          <BlogCard
            title={blog.title}
            description={blog.description}
            category={blog.category}
            createdFrom={blog.createdFrom}
            date={blog.createdAt}
            image={blog.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LatestBlogSwipers;
