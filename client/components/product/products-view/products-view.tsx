'use client';

import React from 'react';

import { useViewModeStore } from '@/lib/state/view-mode';
import { Category, Product } from '@/types';

import { ProductCardBig } from '..';
import { ProductList } from '..';

import useCategories from '@/hooks/use-categories';
import { FilterCategory } from '@/components/filter-category';

const ProdcutsView = ({ products }: { products: Product[] | undefined }) => {
  const view = useViewModeStore((state) => state.viewMode);
  const { categories } = useCategories();

  const categoriesOptions = categories?.map((category: Category) => ({
    id: category.id,
    name: category.name,
    title: 'categoryId=',
    value: `${category.id}`,
  }));

  return (
    <div>
      {/* FITLERS */}
      <FilterCategory categoriesOptions={categoriesOptions} />
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
