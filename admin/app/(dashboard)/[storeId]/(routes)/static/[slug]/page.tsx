import React from 'react';

import prismadb from '@/lib/prismadb';
import StaticForm from '@/components/static/form/static-form';

const StaticPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const staticPage = await prismadb.staticPage.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <StaticForm initialData={staticPage} />
      </div>
    </div>
  );
};

export default StaticPage;
