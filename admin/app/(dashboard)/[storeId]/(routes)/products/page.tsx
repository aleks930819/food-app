import React from 'react';

import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';
import { formatter } from '@/utils/format-price';

import ProductClient from '@/components/product/product-client';
import { ProductColumn } from '@/components/product/table/column';

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedProducts: ProductColumn[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    isFeatured: product.isFeatured,
    isArchived: product.isArchived,
    price: formatter(product.price.toNumber()),
    category: product.category.name,
    createdAt: format(product.createdAt, 'MMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
