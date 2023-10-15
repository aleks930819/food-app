'use client';

import { LayoutList, Grid } from 'lucide-react';
import { useViewModeStore } from '@/lib/state/view-mode';

const ProdcutsViewSwticher = () => {
  const viewMode = useViewModeStore((state) => state.viewMode);
  return (
    <div className="flex justify-end gap-2 mb-4 mt-4">
      <button
        className={`
          ${viewMode === 'grid' ? 'bg-primary-light text-white' : 'bg-gray-100'}
          rounded-full p-2
        `}
        onClick={() => useViewModeStore.setState({ viewMode: 'grid' })}
      >
        <Grid size={30} />
      </button>
      <button
        className={`
          ${viewMode === 'list' ? 'bg-primary-light text-white' : 'bg-gray-100'}
          rounded-full p-2
        `}
        onClick={() => useViewModeStore.setState({ viewMode: 'list' })}
      >
        <LayoutList size={30} />
      </button>
    </div>
  );
};

export default ProdcutsViewSwticher;
