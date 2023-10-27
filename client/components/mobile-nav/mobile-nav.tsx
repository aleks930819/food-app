'use client';

import { useClickAway } from '@uidotdev/usehooks';
import {
  ChevronDown,
  Home,
  X,
  Newspaper,
  Package,
  Leaf,
  GanttChartSquare,
  Apple,
  Bean,
  Cherry,
  LeafyGreen,
  Milk,
  UtensilsCrossed,
} from 'lucide-react';
import React from 'react';
import Link from 'next/link';

import { useCategories } from '@/hooks';
import { LinkType, navLinks } from '@/data/links';

import { Logo } from '@/components/common';
import { Category } from '@/types';

// TODO: Turn this into a reusable component
const LinksIcons = ({ title }: { title: string }) => {
  const ICON_SIZE = 22;

  const iconsMapping = {
    Home: <Home size={ICON_SIZE} />,
    'About Us': <Leaf size={ICON_SIZE} />,
    Services: <GanttChartSquare size={ICON_SIZE} />,
    Products: <Package size={ICON_SIZE} />,
    Blogs: <Newspaper size={ICON_SIZE} />,
  };

  for (const key in iconsMapping) {
    if (title.includes(key)) {
      return iconsMapping[key as keyof typeof iconsMapping];
    }
  }

  return <ChevronDown />;
};

const IconForTheCategory = ({ name }: { name: string }) => {
  const ICON_SIZE = 20;
  // Define a mapping of substrings to icons
  const iconMapping = {
    Fruit: <Cherry size={ICON_SIZE} />,
    Bread: <LeafyGreen size={ICON_SIZE} />,
    Breakfast: <UtensilsCrossed size={ICON_SIZE} />,
    Organic: <Apple size={ICON_SIZE} />,
    Dairy: <Milk size={ICON_SIZE} />,
    Seeds: <Bean size={ICON_SIZE} />,
  };

  for (const key in iconMapping) {
    if (name.includes(key)) {
      return iconMapping[key as keyof typeof iconMapping];
    }
  }

  return <Cherry size={ICON_SIZE} />;
};

const MobileNav = ({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean; toggleMenu: () => void }) => {
  const { categories } = useCategories();

  const ref = useClickAway<HTMLDivElement>(() => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });

  return (
    <nav
      className={
        'flex absolute top-0 left-0 right-0 z-30  2xl:hidden px-4 py-4 text-sm 2xl:text-lg text-white transition-all duration-500 ease-in-out'
      }
    >
      {isMenuOpen && <div className="fixed top-0 left-0 right-0 w-full z-40 h-full bg-black bg-opacity-50 " />}
      <div
        ref={ref as any}
        className={`flex w-3/4  flex-col gap-4 h-full z-50 fixed top-0 left-0  transition duration-500 ease-in-out transform bg-white text-black
        ${isMenuOpen ? '-translate-x-0 visible ' : ' invisibile -translate-x-full  '}`}
      >
        <div className="flex justify-between items-center w-full p-4 bg-primary-3 border-b border-gray-1">
          <Logo />
          <button onClick={toggleMenu} aria-label="close-menu-button" className=" text-black opacity-70">
            <X size={30} />
          </button>
        </div>
        {/* LINKS */}
        <nav className="">
          <ul className="flex flex-col justify-start gap-4 items-start ml-4">
            {navLinks.map((link: LinkType) => (
              <li key={link.title} className="font-bold text-lg ">
                <Link href={link.href} className="flex items-center gap-2" onClick={toggleMenu}>
                  {link.title}
                  <span>
                    <LinksIcons title={link.title} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* CATEOGRIES */}
        <nav className="border-t border-gray-1 w-full py-2">
          <ul className="flex flex-col justify-start gap-4 items-start ml-4">
            <li className="font-bold text-lg flex items-center gap-2">
              Categories
              <span>
                <ChevronDown />
              </span>
            </li>
            {categories.map((category: Category) => (
              <li key={category.id} className=" ">
                <Link href={`/categories/${category.slug}`} className="flex items-center gap-2" onClick={toggleMenu}>
                  {category.name}

                  <span>
                    <IconForTheCategory name={category.name} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="mt-auto bg-primary-3 border-t w-full flex items-center border-gray-1 text-gray-1 text-center mx-auto px-2   h-20 ">
          <p>
            <span>© {new Date().getFullYear()}</span> All rights reserved
          </p>
        </footer>
      </div>
    </nav>
  );
};

export default MobileNav;
