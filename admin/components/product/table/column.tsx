import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import CellAction from './cell-action';

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  category: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'isArchived',
    header: 'Archived',
    cell: ({ row }) => (
      <div className="flex items-center">
        {row.original.isArchived ? (
          <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">Archived</span>
        ) : (
          <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">Active</span>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'isFeatured',
    header: 'Featured',

    cell: ({ row }) => (
      <div className="flex items-center">
        {row.original.isFeatured ? (
          <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">Featured</span>
        ) : (
          <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">Not Featured</span>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
