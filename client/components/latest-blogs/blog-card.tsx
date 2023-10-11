import Image from 'next/image';

import { Columns, User } from 'lucide-react';
import Link from 'next/link';

import { motion, useInView } from 'framer-motion';
import { Variants } from 'framer-motion';
import { useRef } from 'react';

interface BlogCardProps {
  date: string;
  image: string;
  title: string;
  category: string;
  createdFrom: string;
  description: string;
}

export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 0,
    rotateY: 90,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const BlogCard = ({ date, image, title, category, createdFrom, description }: BlogCardProps) => {
  const ref = useRef(null);
  const isInViewCard = useInView(ref, { once: true });

  return (
    <motion.figure
      className="shadow-md overflow-hidden rounded-md"
      variants={cardVariants}
      initial="hidden"
      animate={isInViewCard ? 'animate' : 'initial'}
      ref={ref}
    >
      <div className="relative group   cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={300}
          height={250}
          className="object-cover relative w-full h-64
          transition-all duration-500 ease-in-out
          cursor-pointer"
        />
        <time>
          <span className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded">{date}</span>
        </time>
        <span className="blog-card-image-hover opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
      </div>

      <figcaption className="px-3 py-6 bg-white text-gray-800">
        <div className="w-full flex justify-between items-center pb-4 border-b">
          <span className="flex items-center gap-2">
            <Columns size={24} />
            {category}
          </span>
          <span className="flex items-center">
            <User size={24} />
            <span className="ml-2">{createdFrom}</span>
          </span>
        </div>
        <div className="pt-4">
          <h3 className="text-xl font-bold mb-2">
            <Link href="#">{title.slice(0, 50) + '...'}</Link>
          </h3>
          <p className="text-gray-400">{description.slice(0, 100) + '...'}</p>

          <Link
            href="#"
            className="text-primary-light font-bold inline-block px-4 py-2 mt-4 border border-primary-light
            hover:bg-primary-light hover:text-white transition-all duration-500 ease-in-out rounded-sm
            "
          >
            Read More
          </Link>
        </div>
      </figcaption>
    </motion.figure>
  );
};

export default BlogCard;
