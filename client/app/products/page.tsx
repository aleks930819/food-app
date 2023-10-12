import { getProducts } from '@/actions';
import { PageHeading } from '@/components/page-heading';
import { ProductCardBig } from '@/components/product';

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto py-6">
      <PageHeading message="~ Products ~" heading={`All of our products are <br/>  organic & fresh.`} />
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {products?.map((product) => <ProductCardBig product={product} />)}
      </section>
    </div>
  );
};

export default ProductsPage;
