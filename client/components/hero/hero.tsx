import background from '@/public/images/background.jpg';
import food from '@/public/images/food-4.png';

import { Plus } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="relative h-[70vh] w-full ">
        <div className="">
          <Image src={background} alt="background" layout="fill" objectFit="cover relative" />
          <span className="absolute top-0 left-0 w-full h-full   liniear-gradient" />
        </div>
        <div className="relative w-full max-w-6xl mx-auto h-full flex items-center justify-between">
          {/* TEXT */}
          <div className="px-4 flex flex-col  items-start">
            <p className="text-black text-4xl font-semibold mb-2">
              100% Organic <br /> Vegetables
            </p>
            <h1 className="text-black text-5xl font-semibold">
              Catefully <br /> Handpicked For
              <strong className="text-primary-light underline pb-1 ml-2">You</strong>
            </h1>
            <Link
              href="#"
              className="bg-primary-light flex items-center text-white font-bold px-6 py-4 rounded-full mt-4 hover:bg-primary-light/95 transition-all duration-300 ease-in-out"
            >
              Shop Now
              <Plus size={18} className="ml-2" />
            </Link>
          </div>
          {/* MAIN IMAGE */}
          <div className="w-[40%] h-auto    overflow-hidden">
            <figure className="aspect-auto">
              <Image src={food} alt="food" width={1000} height={1000} className="w-full h-full object-cover" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
