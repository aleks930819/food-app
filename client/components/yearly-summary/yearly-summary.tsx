'use client';
import background from '@/public/images/bg-section4.webp';
import Image from 'next/image';

import { motion, useInView } from 'framer-motion';
import { Variants } from 'framer-motion';
import { useRef } from 'react';
import { Boxes, Award, ShieldHalf, Users } from 'lucide-react';

import CountComponent from '@/components/count-up/count-up';

const ICON_SIZE = 52;
const DURATION = 3;
const ICON_COLOR = 'text-orange-400';

const variants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const YearlySummary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className="relative  mx-auto bg-[#f4f6e8] h-[35vh] pt-16 mt-20"
    >
      {isInView && (
        <section className="flex items-center justify-center gap-10 mx-auto w-full">
          <CountComponent
            duration={DURATION}
            title={'Satisfied Clients'}
            count={1600}
            icon={<Users size={ICON_SIZE} className={ICON_COLOR} />}
          />
          <span className="w-px h-20 bg-gray-400" />
          <CountComponent
            duration={DURATION}
            title={'Expert Team'}
            count={186}
            icon={<ShieldHalf size={ICON_SIZE} className={ICON_COLOR} />}
          />
          <span className="w-px h-20 bg-gray-400" />
          <CountComponent
            duration={DURATION}
            title={'Activate Products'}
            count={200}
            icon={<Boxes size={ICON_SIZE} className={ICON_COLOR} />}
          />
          <span className="w-px h-20 bg-gray-400" />
          <CountComponent
            duration={DURATION}
            title={'Awards Winning'}
            count={123}
            icon={<Award size={ICON_SIZE} className="text-orange-400" />}
          />
        </section>
      )}

      <div className="absolute bottom-0 left-0 w-full h-[10vh]">
        <Image src={background} alt="background" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default YearlySummary;
