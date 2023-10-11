'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Blog } from '@/types/types';

import BlogCard from './blog-card';

const LatestBlogSwipers = ({ blogs }: { blogs: Blog[] | null }) => {
  if (!blogs) return null;

  if (!blogs) return null;

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
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
