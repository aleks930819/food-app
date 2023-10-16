import { Product } from '@/types';
import { Eye, Heart, StarHalf, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      data-testid="product-card"
      href="#"
      className="shadow-xl rounded-md overflow-hidden inline-block relative hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-300 ease-in-out"
    >
      <figure className="  overflow-hidden ">
        <Image
          src={product.imageURL}
          alt={product.name}
          width={400}
          height={270}
          className="object-cover w-full h-56 "
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
          <button className="custom-background w-11 h-11 flex items-center text-center mr-2 rounded-full ">
            <Eye size={20} className="mx-auto" />
          </button>
          <button className="custom-background  rounded-full w-11 h-11 flex items-center text-center">
            <Heart size={20} className="mx-auto" />
          </button>
        </div>
      </section>

      <span>
        <span className="absolute flex items-center gap-1 top-2 right-2 bg-primary-light text-white rounded-sm p-2">
          {product.reviews > 0 && <Star size={16} className="inline-block" fill="#fff" stroke="#fff" strokeWidth={1} />}
          {product.reviews.toFixed(2)}
        </span>
      </span>
    </Link>
  );
};

export default ProductCard;
