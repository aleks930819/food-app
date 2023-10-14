import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="w-full h-screen px-4 flex flex-col items-center justify-center gap-4">
      <Image src="/images/image-404.png" alt="404" width={500} height={500} />

      <h1 className="text-3xl md:text-6xl font-bold text-primary-dark mb-2">Page Not Found</h1>
      <p className="text-gray-400 text-center text-xl md:text-2xl w-full md:w-1/2 mb-2">
        Something went wrong, looks like this page doesn't exist anymore.
      </p>
      <Link
        href="/"
        className="bg-primary-light text-white font-bold uppercase px-6 py-3 rounded-md shadow-md hover:bg-primary-dark transition-all duration-500 ease-in-out"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
