'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { ZoomIn } from 'lucide-react';

import 'swiper/css';

import { BlogImage } from '@/types/types';
import BlogGallerySwiper from './blog-gallery-swiper';

const BlogGallery = ({ gallery }: { gallery: BlogImage[] }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (i: number) => {
    setShowModal(true);
  };

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 mb-6">
      {gallery.map((image, i) => (
        <div
          onClick={() => handleShowModal(i)}
          className="w-full h-20 overflow-hidden rounded-md relative hover-duration-500 ease-in-out cursor-pointer"
        >
          <Image
            src={image.url}
            alt={image.name}
            width={340}
            height={300}
            key={image.id}
            className="object-cover relative w-full h-full"
          />

          <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 hover-duration-500">
            <ZoomIn size={20} className="text-white" />
          </span>
        </div>
      ))}

      {showModal && (
        <BlogGallerySwiper gallery={gallery} handleShowModal={handleShowModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default BlogGallery;
