import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

const gridStyles = {
  thirdColumn: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4',
  fourColumn: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
  default: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4',
  sixColumn: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4',
};

interface GridProps {
  gridType?: 'thirdColumn' | 'default' | 'sixColumn' | 'fourColumn';

  className?: string;
}

const Grid = ({ children, className, gridType }: PropsWithChildren<GridProps>) => {
  return <div className={cn(gridStyles[gridType || 'default'], className)}>{children}</div>;
};

export default Grid;
