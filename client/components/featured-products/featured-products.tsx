import { Product } from '@/types';

import { ProductCard } from '@/components/product';
import { Grid } from '@/components/common';

const FeaturedProducts = ({ products }: { products: Product[] | undefined }) => {
  if (!products) return null;

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-start mb-4">Featured Products</h2>
        {/* CATEGORIES */}
      </div>
      <section className="pt-2   gap-8">
        <Grid gridType="fourColumn">
          {products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default FeaturedProducts;
