'use client';
import background from '@/public/images/bg-section4.webp';
import Image from 'next/image';

import { Boxes, Award, ShieldHalf, Users } from 'lucide-react';
import CountComponent from '../count-up/count-up';

const ICON_SIZE = 52;

const YearlySummary = () => {
  return (
    <div className="relative  mx-auto bg-[#f4f6e8] h-[35vh] pt-16 mt-20">
      <section className="flex items-center justify-center gap-10 mx-auto w-full">
        <CountComponent
          title={'Satisfied Clients'}
          count={1600}
          icon={<Users size={ICON_SIZE} className="text-orange-400" />}
        />
        <span className="w-px h-20 bg-gray-400" />
        <CountComponent
          title={'Expert Team'}
          count={186}
          icon={<ShieldHalf size={ICON_SIZE} className="text-orange-400" />}
        />
        <span className="w-px h-20 bg-gray-400" />
        <CountComponent
          title={'Activate Products'}
          count={200}
          icon={<Boxes size={ICON_SIZE} className="text-orange-400" />}
        />
        <span className="w-px h-20 bg-gray-400" />
        <CountComponent
          title={'Awards Winning'}
          count={1600}
          icon={<Award size={ICON_SIZE} className="text-orange-400" />}
        />
      </section>
      <div className="absolute bottom-0 left-0 w-full h-[10vh]">
        <Image src={background} alt="background" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default YearlySummary;
