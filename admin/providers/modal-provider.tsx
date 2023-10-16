'use client';

import ClientOnly from '@/components/client-only/client-only';
import { StoreModal } from '@/components/modals/store-modal';

export const ModalProvider = () => {
  return (
    <ClientOnly>
      <StoreModal />
    </ClientOnly>
  );
};
