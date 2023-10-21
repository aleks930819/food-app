'use client';

import axios from 'axios';
import useSWR from 'swr';

// fetching the data from the app/api to avoid expose of the admin url
const fetcher = async () => {
  const categories = await axios.get('/api/categories');
  return categories.data;
};

const useCategories = () => {
  const { data: categories } = useSWR('/api/categories', fetcher);

  return {
    categories,
  };
};

export default useCategories;
