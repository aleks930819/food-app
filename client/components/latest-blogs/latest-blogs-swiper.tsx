'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Blog } from '@/types';

import BlogCard from './blog-card';

const LatestBlogSwipers = ({ blogs }: { blogs: Blog[] }) => {
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
        <SwiperSlide className="w-full p-2" key={blog.slug}>
          <BlogCard
            category={blog.category}
            slug={blog.slug}
            title={blog.title}
            createdFrom={blog.createdBy}
            date={blog.createdAt}
            image={blog.images[0].url}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LatestBlogSwipers;
