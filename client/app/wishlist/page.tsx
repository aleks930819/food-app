import { Metadata } from 'next';
import Link from 'next/link';

import { WishlistProductCard } from '@/components/wishlist';

const wishlistProductsData = [
  {
    id: 1,
    name: 'Organic Bananas',
    slug: 'organic-bananas',
    price: 22.0,
    description:
      'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
    quantity: 22,
    gallery: [
      {
        id: 1,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1455853828816-0c301a011711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 2,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 3,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      },
      {
        id: 4,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'Fruits & Vegetable',
        slug: 'fruits-vegetable',
      },
    ],
    reviews: 4,
    discount: 0,
    imageURL:
      'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
  },
  {
    id: 2,
    name: 'Organic Bananas',
    slug: 'organic-bananas',
    price: 22.0,
    description:
      'Sumptuous, filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing to get you out of bed. The goodness of rolled wholegrain oats are combined with a variety of tangy organic berries, and baked into crispy clusters that are as nutritious.',
    quantity: 22,
    gallery: [
      {
        id: 1,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1455853828816-0c301a011711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 2,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 3,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      },
      {
        id: 4,
        name: 'photo',
        url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      },
    ],
    categories: [
      {
        id: 1,
        name: 'Fruits & Vegetable',
        slug: 'fruits-vegetable',
      },
    ],
    reviews: 4,
    discount: 0,
    imageURL:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
  },
];

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Wishlist page',
};

const WishListPage = () => {
  if (wishlistProductsData.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          You have <span className="text-primary-light">0</span> items in your wishlist
        </h2>

        <Link href="/" className="text-primary-light hover:underline text-xl">
          Go back shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">
        You have <span className="text-primary-light">{wishlistProductsData.length}</span> items in your wishlist
      </h2>

      {/* WISHLIST ITEMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10">
        {wishlistProductsData.map((product) => (
          <WishlistProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default WishListPage;
