'use client';

import { useStoreModal } from '@/hooks/use-store-modal';

import { Modal } from '@/components/ui/modal';

export const StoreModal = () => {
  const isOpen = useStoreModal((state) => state.isOpen);

  return (
    <Modal title="Create a new store" description="Create a new store" isOpen={isOpen} onClose={() => {}}>
      Create a new store
    </Modal>
  );
};
