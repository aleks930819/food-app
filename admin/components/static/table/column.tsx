'use client';

import { ColumnDef } from '@tanstack/react-table';

import CellAction from './cell-action';

export type StaticPageColumn = {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
};

export const columns: ColumnDef<StaticPageColumn>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'slug',
    header: 'Slug',
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
