'use client';

import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BlogPageColumn, columns } from './table/column';
import { DataTable } from './table/data-table';
import Heading from '@/components/common/heading/heading';

interface BlogClientProps {
  data: BlogPageColumn[];
}

const BlogClient = ({ data }: BlogClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Blogs articles (${data?.length})`} description="Manage blogs articles." />
        <Button onClick={() => router.push(`/${params.storeId}/blogs/new`)}>
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

export default BlogClient;
