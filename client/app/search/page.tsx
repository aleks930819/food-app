import { getProducts } from '@/actions';
import { Grid } from '@/components/grid';
import { ProductCard } from '@/components/product';
import React from 'react';

const SearchPage = async ({
  searchParams,
}: {
  searchParams: {
    name: string;
  };
}) => {
  const { name } = searchParams;

  const products = await getProducts({
    query: {
      name: name,
    },
  });

  if (!products) return;

  if (products.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-semibold text-center">We didnt found products with that name</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 py-10">
      <h1 className="text-2xl text-gray-500 font-semibold text-center mb-10">
        We found {products.length} products with name {name}
      </h1>

      <section>
        <Grid gridType="fourColumn">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default SearchPage;
