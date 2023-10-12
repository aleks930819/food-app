import { getProducts } from '@/actions';
import { ProductCardBig } from '@/components/product';

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto py-6">
      <p className="text-center text-2xl text-primary-light pb-2">~ Porudcts ~</p>
      <h1 className="text-4xl font-bold text-center">
        All of our products are <br />
        organic & fresh.
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {products?.map((product) => <ProductCardBig product={product} />)}
      </section>
    </div>
  );
};

export default ProductsPage;
