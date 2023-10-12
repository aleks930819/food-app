import { getProducts } from '@/actions';

import { FeaturedProducts } from '@/components/featured-products';
import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { LatestBlogs } from '@/components/latest-blogs';
import { OurTeam } from '@/components/our-team';
import { SpecialOffers } from '@/components/special-offers';
import { YearlySummary } from '@/components/yearly-summary';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="px-4 md:px-0">
      <Hero />
      <Features />
      <FeaturedProducts products={products} />
      <SpecialOffers />
      <OurTeam />
      <YearlySummary />
      <LatestBlogs />
    </main>
  );
}
