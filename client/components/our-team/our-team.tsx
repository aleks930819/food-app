'use client';

import React from 'react';

import Image, { StaticImageData } from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurTeamData = [
  {
    name: 'John Doe',
    title: 'Farmer',
    image:
      'https://images.unsplash.com/photo-1626029322280-ba48ba381345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  },
  {
    name: 'Alisa Doe',
    title: 'Farmer',
    image:
      'https://images.unsplash.com/photo-1589876568181-a1508b8ef473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
  },
  {
    name: 'Dave Doe',
    title: 'Farmer',
    image:
      'https://images.unsplash.com/photo-1601112625284-31170fd7844f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Kristina Doe',
    title: 'Farmer',
    image:
      'https://images.unsplash.com/photo-1602046747040-1df0f6527803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  },
  {
    name: 'Kristina Doe',
    title: 'Farmer',
    image:
      'https://images.unsplash.com/photo-1602046747040-1df0f6527803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  },
  {
    name: 'Kristina Doe',
    title: 'Farmer',
    image:
      'https://images.unsplash.com/photo-1602046747040-1df0f6527803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  },
];

const OurTeam = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 ">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our <span className="text-primary-light">awesome team</span> members
      </h2>
      <Swiper spaceBetween={30} slidesPerView={4} modules={[Pagination]} pagination={{ clickable: true }}>
        {OurTeamData.map((member) => (
          <SwiperSlide>
            <div className="w-auto h-[320px] relative group rounded-md overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                width={700}
                height={700}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end items-center p-4 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 z-20">
                <h3 className="text-2xl font-bold mt-4 text-white translate-y-0 group-hover:translate-y-[-20px] transition-all duration-300 ease-in-out">
                  {member.name}
                </h3>
                <p className="text-gray-100 translate-y-0 group-hover:translate-y-[-20px] transition-all duration-500 ease-in-out">
                  {member.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;