'use client';

import { Children, cloneElement, isValidElement } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { AnimationProps } from 'framer-motion';

interface DisableAnimationMobileProps {
  children: any;
}

const DisableAnimationMobile = ({ children }: DisableAnimationMobileProps) => {
  const { width } = useWindowSize();

  if (!width) return null;

  const isMobile = width! <= 768;

  if (!isMobile) return children;

  const modifiedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    const emptyAnimationProps = {
      animate: 'defualt',
      intial: undefined,
      exit: undefined,
      transition: { duration: 0 },
      variants: { defualt: { opacity: 1, top: 0, bottom: 0 } },
    } as AnimationProps;

    return cloneElement(child, { ...emptyAnimationProps });
  });

  return modifiedChildren;
};

export default DisableAnimationMobile;
