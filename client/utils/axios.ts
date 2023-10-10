import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

type methods = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
interface RequestConfig {
  [key: string]: any;
  endpoint: string;
  params?: {
    [key: string]: any;
  };
  method?: methods;
  body?: any;
}

export async function performRequest<T>({ endpoint, params = {}, method = 'GET', body }: RequestConfig): Promise<T> {
  try {
    const { data } = await instance({
      url: endpoint,
      method,
      params,
      data: body,
    });
    return data;
  } catch (err) {
    throw err;
  }
}
