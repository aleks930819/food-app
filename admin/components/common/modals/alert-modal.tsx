'use client';

import ClientOnly from '@/components/client-only/client-only';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal = ({ isOpen, loading, onClose, onConfirm }: AlertModalProps) => {
  return (
    <ClientOnly>
      <Modal title="Are you sure?" description="This action cannot be undone." isOpen={isOpen} onClose={onClose}>
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button disabled={loading} variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={loading} onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </Modal>
    </ClientOnly>
  );
};
