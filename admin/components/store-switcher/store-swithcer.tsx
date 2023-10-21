'use client';
import { useState } from 'react';

import { Check, ChevronsUpDown, PlusCircle, Store as StoreIcon } from 'lucide-react';

import { Store } from '@prisma/client';
import { cn } from '@/lib/utils';

import { useParams, useRouter } from 'next/navigation';
import { useStoreModal } from '@/hooks/use-store-modal';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

const StoreSwitcher = ({ className, items = [] }: StoreSwitcherProps) => {
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();
  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find((item) => item.value === params.storeId);

  const [open, setOpen] = useState(false);

  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-aria-expanded={open}
          aria-label="Store Switcher"
          className={cn('w-[200px] justify-between', className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          {currentStore?.label || 'Select a store'}
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="py-2">
          {formattedItems.map((item) => (
            <Button
              key={item.value}
              variant="outline"
              size="sm"
              className="w-full text-left"
              onClick={() => onStoreSelect(item)}
            >
              <span className="mr-auto">{item.label}</span>
              {item.value === currentStore?.value && <Check className="ml-auto h-4 w-4" />}
            </Button>
          ))}
          <Button variant="outline" size="sm" className="w-full text-left" onClick={storeModal.onOpen}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Store
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default StoreSwitcher;
