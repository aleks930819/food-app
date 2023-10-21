import { Metadata } from 'next';
import { getProducts } from '@/actions';
import { PageHeading } from '@/components/page-heading';
import { ProdcutsViewSwticher } from '@/components/product';
import ProductsView from '@/components/product/products-view';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page',
};

const ProductsPage = async () => {
  const data = await getProducts();
  const products = data?.products;

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
