import { ZoomIn } from 'lucide-react';
import React from 'react';

const ImageZoomHover = ({ iconSize = 20 }: { iconSize?: number }) => {
  return (
    <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 hover-duration-500">
      <ZoomIn size={iconSize} className="text-white" />
    </span>
  );
};

export default ImageZoomHover;
