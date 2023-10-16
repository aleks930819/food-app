'use client';
import { useEffect } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal';

import { Modal } from '@/components/ui/modal';

const RootPage = () => {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  return <div></div>;
};

export default RootPage;
