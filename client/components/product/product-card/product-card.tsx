import { Product } from '@/types';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCardActions from './product-card-actions';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      data-test="product-card"
      className="shadow-xl  rounded-md  inline-block relative hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-300 ease-in-out"
    >
      <figure className="  overflow-hidden ">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={400}
            loading="eager"
            height={270}
            className="object-cover w-full h-56 "
          />
        </Link>
      </figure>
      <section className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-primary-light text-lg">
          <strong>${product.price}</strong>
        </p>
        {/* ACTIONS */}
        <ProductCardActions product={product} />
      </section>

      <span>
        <span className="absolute flex items-center gap-1 top-2 right-2 bg-primary-light text-white rounded-sm p-2">
          {/* {product.reviews > 0 && <Star size={16} className="inline-block" fill="#fff" stroke="#fff" strokeWidth={1} />} */}
          {/* {product.reviews.toFixed(2)} */}
          {<Star size={16} className="inline-block" fill="#fff" stroke="#fff" strokeWidth={1} />}
        </span>
      </span>
    </div>
  );
};

export default ProductCard;
