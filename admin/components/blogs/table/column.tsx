'use client';

import { ColumnDef } from '@tanstack/react-table';

import CellAction from './cell-action';

export type BlogPageColumn = {
  id: string;
  title: string;
  createdBy: string;
  slug: string;
  createdAt: string;
};

export const columns: ColumnDef<BlogPageColumn>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'slug',
    header: 'Slug',
  },
  {
    accessorKey: 'createdBy',
    header: 'Created by',
  },

  {
    accessorKey: 'createdAt',
    header: 'Date',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
