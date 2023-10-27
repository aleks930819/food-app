'use client';

import { useAuthModalState, useCheckoutMenuState } from '@/lib/state';

import { Heart, User, ShoppingCart, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

import { MobileNav } from '@/components/mobile-nav';
import { Logo } from '@/components/common';
import { CheckoutMenu } from '@/components/checkout-menu';

const TopHeaderActionButton = ({
  text,
  icon,
  dataTestId,
  onClick,
}: {
  text?: string;
  dataTestId?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button data-testid={dataTestId} onClick={onClick}>
      <span className="text-gray-500 font-bold flex items-center   text-sm hover:text-primary-dark transition-colors duration-200 ease-out cursor-pointer">
        {icon && <span className="mr-1">{icon}</span>}
        {text && text}
      </span>
    </button>
  );
};

const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showCheckoutMenu = useCheckoutMenuState((state) => state.showCheckoutMenu);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const router = useRouter();

  const onWishlistClick = () => {
    router.push('/wishlist');
  };

  const showAuthModal = useAuthModalState((state) => state.showAuthModal);

  return (
    <>
      <div data-testid="top-header" className="text-gray-500 border text-center py-3 px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <p>
            Welcome to <Logo />
          </p>
          {/* MOBILE ACTIONS */}
          <div className="flex lg:hidden gap-4 items-center">
            <TopHeaderActionButton icon={<User size={20} />} onClick={onWishlistClick} />
            <div className="bg-primary-light my-4 w-[.5px] h-4" />
            <TopHeaderActionButton icon={<ShoppingCart size={20} />} onClick={showCheckoutMenu} />
            <div className="bg-primary-light my-4 w-[.5px] h-4" />
            <TopHeaderActionButton icon={<Menu size={20} />} onClick={toggleMenu} />
          </div>
          {/* DEKSTOP ACTIONS */}
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
      <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <CheckoutMenu />
    </>
  );
};

export default TopHeader;
