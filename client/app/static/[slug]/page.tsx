import { getStaticPage } from '@/actions';

import editorJsHtml from 'editorjs-html';

import NotFound from '@/app/not-found';

const StaticPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const page = await getStaticPage({ slug: params.slug });
  if (!page) return <NotFound />;

  const EditorJsToHtml = editorJsHtml();

  const content = EditorJsToHtml.parse(JSON.parse(page.content)).join('');

  return (
    <section className="static-page">
      <div
        dangerouslySetInnerHTML={{
          __html: content || [],
        }}
      />
    </section>
  );
};

export default StaticPage;
