'use client';
import { useState } from 'react';
import axios from 'axios';

import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import toast from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';
import { StaticPageColumn } from './column';
import { AlertModal } from '@/components/common/modals/alert-modal';
import { onCopy } from '@/utils/copy-on-clipboard';

interface CellActionProps {
  data: StaticPageColumn;
}

const CellAction = ({ data }: CellActionProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const params = useParams();

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/static/${data.slug}`);
      router.refresh();
      toast.success('Static page deleted successfully');
    } catch (err) {
      toast.error('Something went wrong, please try again later or contact support.');
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} loading={loading} onConfirm={onDelete} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => router.push(`/${params.storeId}/static/${data.slug}`)}>
            <Edit className="w-4 h-4" />
            <span className="ml-2">Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setOpen(true);
            }}
          >
            <Trash className="w-4 h-4" />
            <span className="ml-2">Delete</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onCopy(data.slug)}>
            <Copy className="w-4 h-4" />
            <span className="ml-2">Copy Slug</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CellAction;
