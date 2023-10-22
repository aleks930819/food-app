'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import qs from 'query-string';

import SelectOptions from './select-options';

const FilterCategory = ({
  categoriesOptions,
}: {
  categoriesOptions: {
    id: string;
    name: string;
    title: string;
    value: string;
  }[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    const current = qs.parse(searchParams.toString());

    let newQuery = {
      ...current,
      categoryId: selectedValue || null,
      page: 1,
    };

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: newQuery,
      },
      { skipNull: true },
    );
    router.push(url, { scroll: true });
  };
  return (
    <form className="flex gap-2 items-center ml-2">
      <SelectOptions title="Sort by category" options={categoriesOptions} handleSelect={handleSelect} />
    </form>
  );
};

export default FilterCategory;
