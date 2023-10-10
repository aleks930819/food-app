import React from 'react';

import Image, { StaticImageData } from 'next/image';

import vegetables from '@/public/images/vegetables.png';
import fresh from '@/public/images/fresh.png';
import seeds from '@/public/images/seeds.png';

const ColumnButton = ({ children, color }: { children: React.ReactNode; color: string }) => {
  return (
    <button
      className={`bg-${color}-500 flex items-center font-bold rounded-full text-white px-4 py-2 mt-4 z-20 transition-transform duration-300 ease-in-out transform-growth`}
    >
      {children}
      <span className="arrow-icon">&rarr;</span>
    </button>
  );
};

const Column = ({ children, color, image }: { children: React.ReactNode; color: string; image: StaticImageData }) => {
  return (
    <div
      className={`bg-${color}-100 h-[50%] relative px-6 py-10 md:py-4 group hover:shadow-md transition-all duration-500 ease-out`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="mr-auto mt-10 ml-2">{children}</div>
        <figure className=" group-hover:scale-90 transition-all duration-500 ease-in-out w-[220px] h-[120px] md:w-[320px] md:h-[160px] absolute bottom-0 right-0">
          <Image src={image} alt="vegetables" className=" w-full h-full object-contain  " />
        </figure>
      </div>
    </div>
  );
};

const SpecialOffers = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 h-[500px]  flex flex-col md:flex-row w-full  gap-4">
      {/* FIRST COLUMN */}
      <div className="bg-orange-100 w-full md:w-[50%] relative px-6 py-10 md:py-4 group hover:shadow-md transition-all duration-500 ease-out">
        <div className="flex flex-col justify-center items-center">
          <div className="mr-auto mt-10 ml-2">
            <h3 className="text-2xl font-bold">
              100% Pure <br /> Natural Vegetables
            </h3>
            <button className="bg-primary-light flex items-center font-bold rounded-full text-white px-4 py-2 mt-4 z-20 transition-transform duration-300 ease-in-out  transform-growth">
              Shop Now
              <span className="arrow-icon">&rarr;</span>
            </button>
          </div>
          <figure className="md:w-full w-[200px] h-[120px] md:h-[400px] absolute bottom-0 md:-bottom-16 right-0">
            <Image
              src={vegetables}
              alt="vegetables"
              className=" w-full h-full object-contain group-hover:scale-90 transition-all duration-500 ease-in-out"
              fill
            />
          </figure>
        </div>
      </div>

      {/* SECOND COLUMN */}
      <div className="w-full md:w-[50%] gap-2 flex flex-col  ">
        <Column color="teal" image={fresh}>
          <h3 className="text-2xl  font-bold">
            100% Pure <br /> Natural Juice
          </h3>
          <ColumnButton color="cyan">Shop Now</ColumnButton>
        </Column>

        <Column color="pink" image={seeds}>
          <h3 className="text-2xl  font-bold">
            New Arrivals Discover
            <br />
            100% Pure <br /> Seeds
          </h3>
          <ColumnButton color="rose">Shop Now</ColumnButton>
        </Column>
      </div>
    </div>
  );
};

export default SpecialOffers;
