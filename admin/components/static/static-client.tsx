'use client';

import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { StaticPageColumn, columns } from './table/column';
import { DataTable } from './table/data-table';
import Heading from '@/components/common/heading/heading';

interface StaticPageClientProps {
  data: StaticPageColumn[];
}

const StaticPageClient = ({ data }: StaticPageClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Static pages (${data?.length})`} description="Manage static pages for your store." />
        <Button onClick={() => router.push(`/${params.storeId}/static/new`)}>
          <Plus className="w-4 h-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Separator />
    </>
  );
};

export default StaticPageClient;
