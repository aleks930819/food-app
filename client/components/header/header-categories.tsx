'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Cherry, Bean, Apple, Milk, LeafyGreen, UtensilsCrossed } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

import useCategories from '@/hooks/use-categories';

import { Category } from '@/types';

const ICON_SIZE = 22;

const IconForTheCategory = ({ name }: { name: string }) => {
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
const CategoriesDropDown = ({
  toggleCategoreis,
  categories,
}: {
  toggleCategoreis: boolean;
  categories: Category[] | null;
}) => {
  return (
    <nav className={`categories-links ${toggleCategoreis && 'active'}`}>
      <ul className="flex flex-col items-start gap-3">
        {categories?.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`} className=" flex items-center gap-name.includes('Fruit')">
              <span className="bg-gray-100 text-primary-light rounded-full  p-3">
                <IconForTheCategory name={category.name} />
              </span>
              <span className="text-sm hover:text-primary-dark transition-colors duration-200 ease-out cursor-pointer ml-2">
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

  const { categories } = useCategories();

  return (
    <ul>
      <li
        onMouseEnter={() => setToggleCategories(true)}
        onMouseLeave={() => setToggleCategories(false)}
        className="relative"
      >
        <Link href="#" className="flex items-center gap-2 group">
          <span className="font-bold  cursor-pointer relative">Categories</span>
          <ChevronDown size={18} className="transform group-hover:rotate-180 transition-all duration-300 ease-out" />
          {/* DROPDOWN */}
          <CategoriesDropDown toggleCategoreis={toggleCategories} categories={categories} />
        </Link>
      </li>
    </ul>
  );
};

export default HeaderCategories;
