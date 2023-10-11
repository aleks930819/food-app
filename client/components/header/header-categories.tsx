'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Cherry, Bean, Apple, Milk, LeafyGreen, UtensilsCrossed } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import axios from 'axios';
import useSWR from 'swr';

import { Category } from '@/types/types';

const ICON_SIZE = 22;

const IconForTheCategory = ({ id }: { id: number }) => {
  switch (id) {
    case 1:
      return <Cherry size={ICON_SIZE} />;
    case 2:
      return <LeafyGreen size={ICON_SIZE} />;
    case 3:
      return <UtensilsCrossed size={ICON_SIZE} />;
    case 4:
      return <Apple size={ICON_SIZE} />;
    case 5:
      return <Milk size={ICON_SIZE} />;
    case 6:
      return <Bean size={ICON_SIZE} />;
    default:
      return <Cherry size={ICON_SIZE} />;
  }
};
const CategoriesDropDown = ({
  toggleCategoreis,
  categories,
}: {
  toggleCategoreis: boolean;
  categories: Category[] | null;
}) => {
  return (
    <nav
      className={`${
        toggleCategoreis
          ? `h-auto transform translate-y-0 opacity-100 w-[300px]`
          : `h-0 transform -translate-y-2 opacity-0`
      }
      absolute
      top-full left-0 w-full bg-white z-50 shadow-lg rounded-md overflow-hidden text-black
       transition-all duration-300 ease-out
       `}
    >
      <ul className="flex flex-col items-start py-4 px-2 gap-4">
        {categories?.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`} className=" flex items-center gap-2">
              <span className="bg-gray-100 text-primary-light rounded-full  p-3">
                <IconForTheCategory id={category.id} />
              </span>
              <span className="text-sm hover:text-primary-dark transition-colors duration-200 ease-out cursor-pointer">
                {category.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HeaderCategories = () => {
  const [toggleCategories, setToggleCategories] = useState(false);

  // fetching the data from the app/api to avoid expose of the admin url
  const fetcher = async () => {
    const categories = await axios.get('/api/categories');
    return categories.data;
  };

  const { data: categories } = useSWR('/api/categories', fetcher);

  return (
    <ul>
      <li
        onMouseEnter={() => setToggleCategories(true)}
        onMouseLeave={() => setToggleCategories(false)}
        className="relative"
      >
        <Link href="#" className="flex items-center gap-2 group">
          <span className="font-bold  cursor-pointer">Categories</span>
          <ChevronDown size={18} className="transform group-hover:rotate-180 transition-all duration-300 ease-out" />
          {/* DROPDOWN */}
          <CategoriesDropDown toggleCategoreis={toggleCategories} categories={categories} />
        </Link>
      </li>
    </ul>
  );
};

export default HeaderCategories;
