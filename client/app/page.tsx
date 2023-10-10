import { getProducts } from '@/actions/get-products';

import FeaturedProducts from '@/components/featured-products/featured-products';
import Features from '@/components/features/features';
import Hero from '@/components/hero/hero';
import OurTeam from '@/components/our-team/our-team';
import SpecialOffers from '@/components/special-offers/special-offers';
import YearlySummary from '@/components/yearly-summary/yearly-summary';

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts products={products} />
      <SpecialOffers />
      <OurTeam />
      <YearlySummary />
    </>
  );
}
