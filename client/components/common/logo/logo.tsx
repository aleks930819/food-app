import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <span
        data-testid="top-header-brand"
        className="bg-primary-light text-white text-lg font-bold px-1 py-0.5 rounded-sm angled-span"
      >
        NutriNosh
      </span>
    </Link>
  );
};

export default Logo;
