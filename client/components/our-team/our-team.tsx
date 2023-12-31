'use client';

import React from 'react';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import { Facebook, Instagram, Linkedin } from 'lucide-react';

import man1 from '@/public/images/our-team/man-5.jpg';
import man2 from '@/public/images/our-team/man-2.jpg';
import man4 from '@/public/images/our-team/man-4.jpg';
import man5 from '@/public/images/our-team/man-5.jpg';
import woman from '@/public/images/our-team/woman-1.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OurTeamData = [
  {
    name: 'John Doe',
    title: 'Farmer',
    image: man1,
  },
  {
    name: 'Alisa Doe',
    title: 'Farmer',
    image: woman,
  },
  {
    name: 'Dave Doe',
    title: 'Farmer',
    image: man2,
  },
  {
    name: 'Ivan Doe',
    title: 'Farmer',
    image: man4,
  },
  {
    name: 'Kristina Doe',
    title: 'Farmer',
    image: man5,
  },
];

const OurTeam = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 ">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Our <span className="text-primary-light">awesome team</span> members
      </h2>
      <Swiper
        spaceBetween={30}
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {OurTeamData.map((member) => (
          <SwiperSlide key={member.name}>
            <div className="w-auto h-[320px] relative group rounded-md overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                width={550}
                height={450}
                loading="lazy"
              />

              <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end items-center p-4 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 z-20">
                <h3 className="text-2xl font-bold mt-4 text-white translate-y-0 group-hover:translate-y-[-20px] transition-all duration-500 ease-in-out">
                  {member.name}
                </h3>
                <p className="text-gray-100 translate-y-0 group-hover:translate-y-[-20px] transition-all duration-500 ease-in-out">
                  {member.title}
                </p>
                <div
                  className="flex flex-col gap-3 absolute top-10 left-4 w-full h-full
                transform -translate-x-full group-hover:-translate-x-0 transition-all duration-500 ease-in-out text-white
                "
                >
                  <a href="#">
                    <Facebook size={20} />
                  </a>
                  <a href="#">
                    <Instagram size={20} />
                  </a>
                  <a href="#">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
