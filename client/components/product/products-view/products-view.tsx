'use client';

import React from 'react';

import { useViewModeStore } from '@/lib/state/view-mode';
import { Product } from '@/types/types';

import { ProductCardBig } from '..';
import { ProductList } from '..';

const ProdcutsView = ({ products }: { products: Product[] | null }) => {
  const view = useViewModeStore((state) => state.viewMode);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 px-4 md:px-0">
      {products?.map((product) => {
        if (view === 'grid') {
          return <ProductCardBig key={product.id} product={product} />;
        } else {
          return <ProductList key={product.id} product={product} />;
        }
      })}
    </section>
  );
};

export default ProdcutsView;
