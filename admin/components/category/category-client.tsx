'use client';

import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { Plus } from 'lucide-react';

import Heading from '@/components/common/heading/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CategoryColumn, columns } from './table/column';
import { DataTable } from './table/data-table';

interface CategoryClientProps {
  data: CategoryColumn[];
}

const CategoryClient = ({ data }: CategoryClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Categories (${data?.length})`} description="Manage cateogires for your store." />
        <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
          <Plus className="w-4 h-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for Categories" />
      <Separator />
    </>
  );
};

export default CategoryClient;
