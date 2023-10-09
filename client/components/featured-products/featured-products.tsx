import { Product } from '@/types/types';
import ProductCard from '../product/product-card';
import Grid from '../grid/grid';

const FeaturedProducts = ({ products }: { products: Product[] | null }) => {
  if (!products) return null;

  const showFourProducts = products.slice(0, 4);

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-start mb-4">Featured Products</h2>
        {/* CATEGORIES */}
      </div>
      <section className="pt-2   gap-8">
        <Grid gridType="fourColumn">
          {showFourProducts.map((product: Product) => (
            <ProductCard product={product} />
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default FeaturedProducts;
