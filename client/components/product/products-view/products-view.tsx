'use client';

import React from 'react';

import { useViewModeStore } from '@/lib/state/view-mode';
import { Category, Product } from '@/types';

import { ProductCardBig } from '..';
import { ProductList } from '..';

import useCategories from '@/hooks/use-categories';
import { SelectOptions } from '@/components/select-options';

const ProdcutsView = ({ products }: { products: Product[] | undefined }) => {
  const view = useViewModeStore((state) => state.viewMode);
  const { categories } = useCategories();

  const priceOptions = [
    {
      id: '0-50',
      name: '0-50',
      value: 'price=0-50',
    },
    {
      id: '50-100',
      name: '50-100',
      value: 'price=50-100',
    },
  ];

  const categoriesOptions = categories?.map((category: Category) => ({
    id: category.id,
    name: category.name,
    value: `categoryId=${category.id}`,
  }));

  return (
    <div>
      {/* FITLERS */}
      <form className="flex gap-2 items-center ml-2">
        <SelectOptions title="Sort by category" options={categoriesOptions} />
        <SelectOptions title="Sort by price" options={priceOptions} />
      </form>
      {/* PRODUCTS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 px-4 md:px-0">
        {products?.map((product) => {
          if (view === 'grid') {
            return <ProductCardBig key={product.id} product={product} />;
          } else {
            return <ProductList key={product.id} product={product} />;
          }
        })}
      </section>
    </div>
  );
};

export default ProdcutsView;
