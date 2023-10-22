import React from 'react';

import Link from 'next/link';

import { navLinks, LinkType } from '@/data/links';

import HeaderCategories from './header-categories';
import { CartButton } from '../cart';

const BottomHeader = async () => {
  return (
    <div className="bg-primary-light w-full">
      <div className="hidden max-w-6xl md:flex justify-between items-center mx-auto  px-4 py-4 text-white">
        {/* CATEGORIES */}
        <HeaderCategories />
        {/* LINKS */}
        <nav className="">
          <ul className="inline-flex justify-center gap-10 items-center ">
            {navLinks.map((link: LinkType) => (
              <li key={link.title} className="font-bold ">
                <Link href={link.href} className="group relative">
                  {link.title}
                  <span className="absolute -bottom-1  left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* CART */}
        <CartButton />
      </div>
    </div>
  );
};

export default BottomHeader;
