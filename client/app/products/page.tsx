import { getProducts } from '@/actions';
import { PageHeading } from '@/components/page-heading';
import { ProdcutsViewSwticher, ProductCardBig } from '@/components/product';
import ProductsView from '@/components/product/products-view';

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto py-6">
      <PageHeading message="~ Products ~" heading={`All of our products are <br/>  organic & fresh.`} />
      {/* PRODUCTS VIEW */}
      <ProdcutsViewSwticher />
      <ProductsView products={products} />
    </div>
  );
};

export default ProductsPage;
