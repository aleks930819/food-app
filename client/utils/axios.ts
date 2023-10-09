import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

type FetchDataProps = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
};

export const fetchData = async ({ url, method = 'GET', data }: FetchDataProps): Promise<any> => {
  try {
    const res = await instance.request({
      url,
      method,
      data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
