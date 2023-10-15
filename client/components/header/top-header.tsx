'use client';

import { useAuthModalState } from '@/lib/state/auth-modal';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TopHeaderActionButton = ({
  text,
  icon,
  dataTestId,
  onClick,
}: {
  text: string;
  dataTestId?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button data-testid={dataTestId} onClick={onClick}>
      <span className="text-gray-500 font-bold flex items-center   text-sm hover:text-primary-dark transition-colors duration-200 ease-out cursor-pointer">
        {icon && <span className="mr-1">{icon}</span>}
        {text}
      </span>
    </button>
  );
};

const TopHeader = () => {
  const router = useRouter();

  const onWishlistClick = () => {
    router.push('/wishlist');
  };

  const showAuthModal = useAuthModalState((state) => state.showAuthModal);

  return (
    <div data-testid="top-header" className="text-gray-500 border text-center py-3 px-2 sm:px-4 lg:px-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <p>
          Welcome to{' '}
          <span
            data-testid="top-header-brand"
            className="bg-primary-light text-white text-lg font-bold px-1 py-0.5 rounded-sm angled-span"
          >
            NutriNosh
          </span>
        </p>
        {/* ACTIONS */}
        <div className="hidden  md:flex gap-4 items-center">
          <TopHeaderActionButton
            dataTestId="top-header-action-button-wishlist"
            text="My Wishlist"
            icon={<Heart size={14} />}
            onClick={onWishlistClick}
          />
          <div className="bg-primary-light my-4 w-[.5px] h-4"></div>
          <TopHeaderActionButton
            dataTestId="top-header-action-button-auth"
            text="Sign In | Sign Up"
            onClick={showAuthModal}
          />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
