import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SelectOptionsProps {
  title: string;
  options: {
    id: string;
    name: string;
    value: string;
  }[];
}

const SelectOptions = ({ title, options }: SelectOptionsProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    router.push(`${pathname}${pathname.includes('?') ? '&' : '?'}${selectedValue}`, {
      scroll: false,
    });
  };

  return (
    <select className="border border-gray-300 rounded-md px-4 py-2 mt-4" onChange={handleSelect}>
      <label htmlFor="">{title}</label>
      <option value="">{title}</option>
      {options?.map((option) => (
        <option key={option.id} value={option.value} className="focus:border-primary-light">
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOptions;
