import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

const gridStyles = {
  default: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4',
  bigGrid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4',
};

interface GridProps {
  bigGrid?: boolean;
  className?: string;
}

const Grid = ({ children, bigGrid, className }: PropsWithChildren<GridProps>) => {
  return <div className={cn(bigGrid ? gridStyles.bigGrid : gridStyles.default, className)}>{children}</div>;
};

export default Grid;
