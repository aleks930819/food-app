'use client';

import Image from 'next/image';
import { ImagePlus, Trash } from 'lucide-react';

import { CldUploadWidget } from 'next-cloudinary';

import { Button } from '@/components/ui/button';
import ClientOnly from '@/components/client-only/client-only';

interface ImageUploadProps {
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  // eslint-disable-next-line no-unused-vars
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload = ({ disabled, onChange, onRemove, value }: ImageUploadProps) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <ClientOnly>
      <div className="mb-4 flex itesm-center gap-4">
        {value?.map((url) => (
          <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden" key={url}>
            <div className="z-10 absolute top-2 right-2 ">
              <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="icon">
                <Trash className="w-4 h-4" />
              </Button>
            </div>
            <Image fill className=" object-cover " src={url} alt="billboard" />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="jmrhx8e8">
        {({ open }) => {
          const onClick = () => open();

          return (
            <Button type="button" disabled={disabled} onClick={onClick} variant="secondary">
              <span className="mr-2">Upload</span>
              <ImagePlus className="w-4 h-4" />
            </Button>
          );
        }}
      </CldUploadWidget>
    </ClientOnly>
  );
};

export default ImageUpload;
