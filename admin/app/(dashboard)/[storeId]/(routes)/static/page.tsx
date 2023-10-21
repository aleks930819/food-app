import React from 'react';

import StaticPageClient from '@/components/static/static-client';

import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';
import { StaticPageColumn } from '@/components/static/table/column';

const StaticPages = async ({ params }: { params: { storeId: string } }) => {
  const staticPages = await prismadb.staticPage.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formtatedStaticPages: StaticPageColumn[] = staticPages.map((page) => ({
    id: page.id,
    title: page.title,
    slug: page.slug,
    createdAt: format(page.createdAt, 'MMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <StaticPageClient data={formtatedStaticPages} />
      </div>
    </div>
  );
};

export default StaticPages;
