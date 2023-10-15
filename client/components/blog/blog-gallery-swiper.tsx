import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MoveRight, MoveLeft } from 'lucide-react';
import { useClickAway } from '@uidotdev/usehooks';

import { useRef, useState } from 'react';
import { BlogImage } from '@/types';

const SwiperChangeButton = ({ direction, action }: { direction: string; action: () => void }) => {
  const className = direction === 'left' ? 'left-48' : 'right-48';
  return (
    <button
      onClick={action}
      className={`${className} group rounded-sm hidden md:block text-white bg-primary-light p-2 absolute top-1/2 transform -translate-y-1/2`}
    >
      {direction === 'left' ? (
        <MoveLeft size={30} className="group-hover:scale-125 transition-all duration-500 ease-in-out" />
      ) : (
        <MoveRight size={30} className="group-hover:scale-125 transition-all duration-500 ease-in-out" />
      )}
    </button>
  );
};

interface BlogGallerySwiperProps {
  setShowModal: (showModal: boolean) => void;
  handleShowModal: () => void;
  gallery: BlogImage[];
}

const BlogGallerySwiper = ({ setShowModal, gallery, handleShowModal }: BlogGallerySwiperProps) => {
  const [swiperImageIndex, setSwiperImageIndex] = useState(0);

  const ref: any = useClickAway(() => {
    setShowModal(false);
  });

  const swiperRef = useRef<any>(null);

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
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-70 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
      <div className="w-3/4 md:w-1/2 mx-auto" ref={ref}>
        <Swiper
          className="relative"
          ref={swiperRef}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setSwiperImageIndex(swiper.activeIndex);
          }}
          onSwiper={(swiper) => {
            setSwiperImageIndex(swiper.activeIndex);
          }}
        >
          {gallery.map((image, i) => (
            <>
              <SwiperSlide className="w-full h-[400px] xl:h-[650px] relative" key={image.id}>
                <div className="w-full h-[400px] xl:h-[650px] ">
                  <Image
                    src={image.url}
                    alt={image.name}
                    width={450}
                    height={300}
                    key={image.id}
                    className="object-cover relative w-full h-full"
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        <SwiperChangeButton direction="left" action={onPreviousImageClick} />
        <SwiperChangeButton direction="right" action={onNextImageClick} />
      </div>
    </div>
  );
};

export default BlogGallerySwiper;
