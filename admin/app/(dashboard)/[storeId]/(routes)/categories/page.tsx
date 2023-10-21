import React from 'react';

import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';
import CategoryClient from '@/components/category/category-client';
import { CategoryColumn } from '@/components/category/table/column';

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const cateogires = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },

    orderBy: {
      createdAt: 'desc',
    },
  });

  const formatedCategories: CategoryColumn[] = cateogires.map((category) => ({
    id: category.id,
    name: category.name,
    createdAt: format(new Date(category.createdAt), 'dd/MM/yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formatedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
