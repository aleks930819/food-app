import { StaticPage } from '@/types';
import { performRequest } from '@/utils/axios';

const getStaticPage = async ({ slug }: { slug: string }) => {
  try {
    const page = performRequest<StaticPage | undefined>({
      method: 'GET',
      endpoint: `/static/${slug}`,
    });
    return page;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export default getStaticPage;
