'use client';

import { LayoutList, Grid2X2 } from 'lucide-react';
import { useViewModeStore } from '@/lib/state/view-mode';
import { useWindowSize } from '@uidotdev/usehooks';

const ProdcutsViewSwticher = () => {
  const viewMode = useViewModeStore((state) => state.viewMode);
  const { width } = useWindowSize();
  let isMobile = width! < 768;

  let iconSize = isMobile ? 25 : 30;

  return (
    <div className="flex mr-4 md:mr-auto justify-end gap-2 mb-4 mt-4">
      <button
        className={`
          ${viewMode === 'grid' ? 'bg-primary-light text-white' : 'bg-gray-100'}
          rounded-full p-2
        `}
        onClick={() => useViewModeStore.setState({ viewMode: 'grid' })}
      >
        <Grid2X2 size={iconSize} />
      </button>
      <button
        className={`
          ${viewMode === 'list' ? 'bg-primary-light text-white' : 'bg-gray-100'}
          rounded-full p-2
        `}
        onClick={() => useViewModeStore.setState({ viewMode: 'list' })}
      >
        <LayoutList size={iconSize} />
      </button>
    </div>
  );
};

export default ProdcutsViewSwticher;
