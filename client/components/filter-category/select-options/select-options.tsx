import { ClientOnly } from '@/components/common';
import React from 'react';

interface SelectOptionsProps {
  title: string;
  options: {
    id: string;
    name: string;
    value: string;
  }[];
  // eslint-disable-next-line no-unused-vars
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOptions = ({ title, options, handleSelect }: SelectOptionsProps) => {
  return (
    <ClientOnly>
      <select className="border border-gray-300 rounded-md px-4 py-2 mt-4" onChange={handleSelect}>
        <label htmlFor="">{title}</label>
        <option value="">{title}</option>
        {options?.map((option) => (
          <option key={option.id} value={option.value} className="focus:border-primary-light">
            {option.name}
          </option>
        ))}
      </select>
    </ClientOnly>
  );
};

export default SelectOptions;
