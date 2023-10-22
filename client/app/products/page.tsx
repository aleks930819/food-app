import { Metadata } from 'next';
import { getProducts } from '@/actions';

import { PageHeading } from '@/components/page-heading';
import { ProdcutsViewSwticher } from '@/components/product';
import ProductsView from '@/components/product/products-view';
import { Pagination } from '@/components/common';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page',
};

interface ProductsPageProps {
  searchParams: {
    page: string;
    categoryId: string;
    price: string;
  };
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const { categoryId } = searchParams;

  const query = {
    categoryId,
    page: Number(searchParams.page) || 1,
    limit: 10,
  };

  const data = await getProducts({ query });

  if (!data) return null;

  const metaData = data.meta_data;
  const products = data.products;

  return (
    <div className="max-w-6xl mx-auto py-6">
      <PageHeading message="~ Products ~" heading={`All of our products are <br/>  organic & fresh.`} />
      {/* PRODUCTS VIEW */}
      <ProdcutsViewSwticher />
      <ProductsView products={products} />
      <Pagination currentPage={metaData?.current_page} totalPages={metaData?.total_pages} />
    </div>
  );
};

export default ProductsPage;
