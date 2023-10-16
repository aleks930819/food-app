import Image from 'next/image';
import React from 'react';

interface ServicesCardProps {
  services: {
    id: number;
    title: string;
    content: string;
    image: string;
    icon: React.ReactNode;
  };
}
const ServicesCard = ({ services }: ServicesCardProps) => {
  return (
    <figure className="shadow-lg group mb-10">
      <div
        className="w-full h-64 relative rounded-md
         group-hover:h-72 transition-all duration-500 ease-in-out
        "
      >
        <Image
          src={services.image}
          alt={services.title}
          width={840}
          height={600}
          className="object-cover rounded-md relative w-full h-64 hover-duration-500  cursor-pointer
            group-hover:h-72 transition-all duration-500 ease-in-out
            "
        />
        <span
          className="absolute -bottom-4 right-6 bg-secondary text-white p-4
           group-hover:-translate-y-10 transition-all duration-500 ease-in-out z-20
          "
        >
          {services.icon}
        </span>

        <h2
          className="absolute
         inset-0    flex items-center justify-center
        text-2xl text-white z-10
        group-hover:opacity-0 transition-all duration-500 ease-in-out
        "
        >
          {services.title}
        </h2>

        <div
          className="group-hover:translate-y-0 transition-all duration-500 ease-in-out
            transform translate-y-48 text-white
            w-full h-0  bg-black bg-opacity-60 z-10
            absolute inset-0 bottom-0 group-hover:h-full opacity-0 group-hover:opacity-100
          "
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{services.title}</h2>
            <p className="text-gray-400">{services.content}</p>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ServicesCard;
