'use client';

import ClientOnly from '@/components/common/client-only';
import React, { useState } from 'react';

type ToolTipPosition = 'top' | 'bottom' | 'left' | 'right';

interface ToolTipProps {
  children: React.ReactNode;
  tooltip: string;
  position?: ToolTipPosition;
}

const ToolTip = ({ children, tooltip, position = 'bottom' }: ToolTipProps) => {
  const [show, setShow] = useState(false);

  const positionOfTheToolTip = () => {
    switch (position) {
      case 'top':
        return '-top-14';
      case 'bottom':
        return '-bottom-14';
      case 'left':
        return '-translate-x-full -translate-y-1/2 top-1/2';
      case 'right':
        return '-translate-x-full -translate-y-1/2 top-1/2';
    }
  };

  return (
    <ClientOnly>
      <div className=" relative flex z-10" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
        <span
          className={`
          ${positionOfTheToolTip()}
          absolute  scale-0 transition-all rounded bg-gray-800 py-2 px-3 text-xs text-white
          ${show ? 'scale-100' : ''}
          `}
        >
          {tooltip}
        </span>
      </div>
    </ClientOnly>
  );
};

export default ToolTip;
