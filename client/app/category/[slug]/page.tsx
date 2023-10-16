import React from 'react';

const CategoryPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;

  console.log(slug);
  return <div></div>;
};

export default CategoryPage;
