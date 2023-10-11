'use client';
import background from '@/public/images/bg-section4.webp';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { motion, useInView } from 'framer-motion';
import { Variants } from 'framer-motion';
import { useRef } from 'react';
import { Boxes, Award, ShieldHalf, Users } from 'lucide-react';

import CountComponent from '@/components/count-up/count-up';

const ICON_SIZE = 50;
const DURATION = 3;
const ICON_COLOR = 'text-secondary';

const variants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const YearlySummary = ({ classNames }: { classNames?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className={cn('relative  mx-auto bg-[#f4f6e8] h-auto md:h-[40vh] py-10  md:py-auto md:pt-16 mt-20', classNames)}
    >
      {isInView && (
        <section className="flex flex-col px-4 md:px-auto justify-start items-start md:flex-row md:justify-center md:items-center gap-6 ">
          <CountComponent
            duration={DURATION}
            title={'Satisfied Clients'}
            count={1600}
            icon={<Users size={ICON_SIZE} className={ICON_COLOR} />}
          />
          <span className="hidden md:block w-px h-20 bg-gray-400"></span>
          <span className="block md:hidden w-full h-px bg-gray-400"></span>

          <CountComponent
            duration={DURATION}
            title={'Expert Team'}
            count={186}
            icon={<ShieldHalf size={ICON_SIZE} className={ICON_COLOR} />}
          />
          <span className="hidden md:block w-px h-20 bg-gray-400"></span>
          <span className="block md:hidden w-full h-px bg-gray-400"></span>
          <CountComponent
            duration={DURATION}
            title={'Activate Products'}
            count={200}
            icon={<Boxes size={ICON_SIZE} className={ICON_COLOR} />}
          />
          <span className="hidden md:block w-px h-20 bg-gray-400"></span>
          <span className="block md:hidden w-full h-px bg-gray-400"></span>
          <CountComponent
            duration={DURATION}
            title={'Awards Winning'}
            count={123}
            icon={<Award size={ICON_SIZE} className="text-orange-400" />}
          />
        </section>
      )}

      <div className="hidden md:block absolute bottom-0 left-0 w-full h-[10v]">
        <Image src={background} alt="background" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default YearlySummary;
