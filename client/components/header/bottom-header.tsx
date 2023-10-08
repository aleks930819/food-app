import React from 'react';

import { ChevronDown, ShoppingCart } from 'lucide-react';

import Link from 'next/link';

const BottomHeader = () => {
  return (
    <div className="bg-primary-light w-full">
      <div className="max-w-4xl flex justify-between items-center mx-auto  px-4 py-4 text-white">
        {/* CATEGORIES */}
        <ul>
          <li>
            <Link href="#" className="flex items-center gap-2">
              <span className="font-bold  cursor-pointer">Categories</span>
              <ChevronDown size={18} />
            </Link>
          </li>
        </ul>
        {/* LINKS */}
        <nav className="">
          <ul className="inline-flex justify-center gap-10 items-center ">
            <li className="font-bold">Home</li>
            <li className="font-bold">About Us</li>
            <li className="font-bold">Products</li>
            <li className="font-bold">News</li>
          </ul>
        </nav>
        {/* CART */}
        <nav className="flex items-center gap-2">
          <Link href="#" className="bg-primary-dark flex items-center gap-2 px-4 py-2 rounded-full">
            <span className="font-bold flex items-center gap-2">
              <ShoppingCart size={18} />
              Cart
            </span>
            <span className="bg-white text-primary-dark rounded-full w-6 h-6 flex items-center justify-center">0</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default BottomHeader;
