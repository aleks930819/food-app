import Image from 'next/image';

const FooterGalleryImageItem = ({ image }: { image: string }) => {
  return (
    <div className="w-20 h-20 relative overflow-hidden rounded-md">
      <Image src={image} alt="fresh" width={200} height={200} className="w-full h-full object-cover" />
    </div>
  );
};

export default FooterGalleryImageItem;
