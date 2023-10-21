'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import 'swiper/css';

import { ProductImage } from '@/types';
import BlogGallerySwiper from './blog-gallery-swiper';
import { ImageZoomHover } from '../ui';

const BlogGallery = ({ gallery }: { gallery: ProductImage[] }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 mb-6">
      {gallery.map((image) => (
        <div
          key={image.id}
          onClick={handleShowModal}
          className="w-full h-20 overflow-hidden rounded-md relative hover-duration-500 ease-in-out cursor-pointer"
        >
          <Image
            src={image.url}
            alt={''}
            width={340}
            height={300}
            key={image.id}
            className="object-cover relative w-full h-full"
          />

          <ImageZoomHover />
        </div>
      ))}

      {showModal && (
        <BlogGallerySwiper gallery={gallery} handleShowModal={handleShowModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default BlogGallery;
