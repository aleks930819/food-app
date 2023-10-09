import { getProducts } from '@/actions/get-products';

import FeaturedProducts from '@/components/featured-products/featured-products';
import Features from '@/components/features/features';
import Hero from '@/components/hero/hero';

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts products={products} />
    </>
  );
}
