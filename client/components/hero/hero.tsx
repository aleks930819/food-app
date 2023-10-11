'use client';

import background from '@/public/images/background.webp';
import food from '@/public/images/food-4.webp';

import { motion, useInView } from 'framer-motion';
import { Variants } from 'framer-motion';
import { Plus } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

const variants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div className="relative h-[70vh] w-full z-10">
      <div>
        <Image src={background} alt="background" layout="fill" objectFit="cover relative" />
        <span className="absolute top-0 left-0 w-full h-full   liniear-gradient" />
      </div>
      <div className="relative w-full max-w-6xl mx-auto h-full flex items-center justify-between">
        {/* TEXT */}
        <div className="px-4 flex flex-col  items-start">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-black text-4xl font-semibold mb-2"
          >
            100% Organic <br /> Vegetables
          </motion.p>
          <motion.h1
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="text-black text-5xl font-semibold"
          >
            Catefully <br /> Handpicked For
            <strong className="text-primary-light underline pb-1 ml-2">You</strong>
          </motion.h1>
          <motion.span variants={variants} initial="hidden" animate="visible" transition={{ duration: 0.85 }}>
            <Link
              href="#"
              aria-label="Shop Now"
              className="bg-primary-light flex items-center text-white font-bold px-6 py-4 rounded-full mt-4 hover:bg-primary-light/95 transition-all duration-300 ease-in-out"
            >
              Shop Now
              <Plus size={18} className="ml-2" />
            </Link>
          </motion.span>
        </div>
        {/* MAIN IMAGE */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="w-[40%] h-auto    overflow-hidden"
        >
          <figure className="aspect-auto">
            <Image src={food} alt="food" width={1000} height={1000} className="w-full h-full object-cover" />
          </figure>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
