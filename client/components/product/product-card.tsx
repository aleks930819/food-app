import { Product } from '@/types/types';
import { Eye, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href="#" className="shadow-xl inline-block relative ">
      <figure className="aspect-auto h-56   overflow-hidden ">
        <Image
          src={product.imageURL}
          alt={product.name}
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </figure>
      <section className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-primary-light text-lg">
          <strong>${product.price}</strong>
        </p>
        {/* ACTIONS */}
        <div className="flex w-full pt-4">
          <button className="custom-background mr-auto rounded-full py-2 px-4 ">Add to cart</button>
          <button className="custom-background w-10 h-10 flex items-center text-center mr-2 rounded-full ">
            <Eye size={18} className="mx-auto" />
          </button>
          <button className="custom-background  rounded-full w-10 h-10 flex items-center text-center">
            <Heart size={18} className="mx-auto" />
          </button>
        </div>
      </section>
    </Link>
  );
};

export default ProductCard;
