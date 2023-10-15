'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import Image from 'next/image';
import React from 'react';
import { useRef, useState } from 'react';
import { BlogImage } from '@/types';
import { ImageZoomHover } from '../ui';
import { useClickAway } from '@uidotdev/usehooks';
import { MoveLeft, MoveRight, X } from 'lucide-react';

interface ProductGalleryImagesProps {
  gallery: BlogImage[];
}

const ProductImageGalleryThumbnails = ({
  gallery,
  currentImage,
  onGalleryImagesClick,
  setCurrentImage,
  imageWidth,
  imageHeight,
}: {
  gallery: BlogImage[];
  currentImage: number;
  onGalleryImagesClick?: (i: number) => void;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  imageWidth: number;
  imageHeight: number;
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 p-2  md:mt-6">
      {gallery.map((image, i) => (
        <div
          className={`${currentImage === i ? 'border-2 border-primary-light' : ''} h-24 overflow-hidden rounded-md  `}
          style={{
            // RECALCULATE THE WIDTH OF THE IMAGE TO FIT THE CONTAINER WIDTH
            // 4 IMAGES PER ROW (25%) - 8px GAP BETWEEN IMAGES
            flexBasis: 'calc(25% - 8px)',
          }}
          onClick={() => {
            onGalleryImagesClick && onGalleryImagesClick(i);
          }}
        >
          <Image
            src={image.url}
            alt={''}
            width={imageWidth}
            height={imageHeight}
            onClick={() => setCurrentImage(i)}
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

const FullImageSlider = ({
  gallery,
  setShowFullImageSlider,
}: {
  setShowFullImageSlider: (showFullImageSlider: boolean) => void;
  gallery: BlogImage[];
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const swiperRef = useRef<any>(null);

  const ref: any = useClickAway(() => {
    setShowFullImageSlider(false);
  });

  const onGalleryImagesClick = (i: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(i);
    }
  };

  // Custom Navigation Buttons for Swiper
  const onNextImageClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const onPreviousImageClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-40 bg-black  flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
      {/* CURRENT IMAGE INDEX */}
      <div className=" absolute top-20 left-5 md:top-10 md:left-10 transform translate-x-1/2 -translate-y-1/2 flex items-center gap-2 text-white z-50">
        <span className="text-white text-2xl">
          {currentImage + 1} / {gallery.length}
        </span>
      </div>
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowFullImageSlider(false)}
        className="absolute  top-20 right-6 md:top-10 md:left-10transform translate-x-1/2 -translate-y-1/2 flex items-center gap-2 text-white z-50"
      >
        <X size={35} />
      </button>
      <div
        className="relative
      w-3/4 h-3/4
      md:w-1/2 md:h-1/2"
        ref={ref}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          className="w-full h-full"
          onSlideChange={(swiper) => {
            setCurrentImage(swiper.activeIndex);
          }}
          onSwiper={(swiper) => {
            setCurrentImage(swiper.activeIndex);
          }}
        >
          {gallery.map((image, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full">
                <Image
                  src={image.url}
                  alt={''}
                  width={450}
                  height={350}
                  className="w-full h-full object-contain cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={onPreviousImageClick}
          className="absolute hidden top-1/2 left-0 transform -translate-y-1/2 md:flex items-center gap-2 text-white z-50"
        >
          <MoveLeft size={35} />
        </button>
        <button
          onClick={onNextImageClick}
          className="absolute hidden top-1/2 right-0 transform -translate-y-1/2 md:flex items-center gap-2 text-white z-50"
        >
          <MoveRight size={35} />
        </button>

        <ProductImageGalleryThumbnails
          gallery={gallery}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          imageWidth={140}
          imageHeight={120}
          onGalleryImagesClick={onGalleryImagesClick}
        />
      </div>
    </div>
  );
};

const ProductGalleryImages = ({ gallery }: ProductGalleryImagesProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const [showFullImageSlider, setShowFullImageSlider] = useState(false);

  return (
    <>
      <div className="p-2">
        <div
          className="w-full h-96 shadow-lg rounded-md group relative cursor-pointer"
          onClick={() => setShowFullImageSlider(true)}
        >
          <Image
            src={gallery[currentImage].url}
            alt={''}
            width={450}
            height={350}
            className="w-full h-full object-cover cursor-pointer"
          />
          <ImageZoomHover iconSize={35} />
        </div>
        <ProductImageGalleryThumbnails
          gallery={gallery}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          imageWidth={140}
          imageHeight={120}
        />
      </div>
      {showFullImageSlider && <FullImageSlider gallery={gallery} setShowFullImageSlider={setShowFullImageSlider} />}
    </>
  );
};

export default ProductGalleryImages;
