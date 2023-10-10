'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BlogCard from './blog-card';

const blogData = [
  {
    date: '2023-10-10',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Lorem Ipsum Blog 1',
    category: 'Technology',
    createdFrom: 'New York',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    date: '2023-10-09',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Travel Adventures Blog 2',
    category: 'Travel',
    createdFrom: 'Paris',
    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
  {
    date: '2023-10-08',
    image:
      'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    title: 'Cooking Delights Blog 3',
    category: 'Food',
    createdFrom: 'Rome',
    description: 'Vestibulum id ligula porta felis euismod semper.',
  },
  {
    date: '2023-10-07',
    image:
      'https://images.unsplash.com/photo-1567769541495-338ee7203e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    title: 'Fitness Tips Blog 4',
    category: 'Health',
    createdFrom: 'Los Angeles',
    description: 'Donec ullamcorper nulla non metus auctor fringilla.',
  },
  {
    date: '2023-10-06',
    image:
      'https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    title: 'Fashion Trends Blog 5',
    category: 'Fashion',
    createdFrom: 'London',
    description: 'Cras mattis consectetur purus sit amet fermentum.',
  },
  {
    date: '2023-10-05',
    image:
      'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Nature Exploration Blog 6',
    category: 'Nature',
    createdFrom: 'Sydney',
    description: 'Etiam porta sem malesuada magna mollis euismod.',
  },
];

const LatestBlogSwipers = () => {
  return (
    <Swiper spaceBetween={30} slidesPerView={3} modules={[Pagination]} pagination={{ clickable: true }}>
      {blogData.map((blog) => (
        <SwiperSlide>
          <BlogCard
            title={blog.title}
            description={blog.description}
            category={blog.category}
            createdFrom={blog.createdFrom}
            date={blog.date}
            image={blog.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LatestBlogSwipers;
