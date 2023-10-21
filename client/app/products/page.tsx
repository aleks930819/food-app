import { Metadata } from 'next';
import { getProducts } from '@/actions';
import { PageHeading } from '@/components/page-heading';
import { ProdcutsViewSwticher } from '@/components/product';
import ProductsView from '@/components/product/products-view';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page',
};

interface ProductsPageProps {
  searchParams: {
    categoryId: string;
    price: string;
  };
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const { categoryId } = searchParams;

  const data = await getProducts({ query: { categoryId } });
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
