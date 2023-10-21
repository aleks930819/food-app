export interface ProductImage {
  id: 'string';
  productId: 'string';
  url: 'string';
  createdAt: 'string';
  updatedAt: 'string';
}
export interface MetaData {
  total_count: number;
  total_pages: number;
  current_page: number;
}

export interface Product {
  id: string;
  storeId: string;
  categoryId: string;
  quantity: number;
  name: string;
  slug: string;
  description: string;
  price: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
  images: ProductImage[];
  category: Category;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  storeId: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogImage {
  id: number;
  name: string;
  url: string;
}

export interface Blog {
  id: number;
  createdAt: string;
  updatedAt: string;
  image: string;
  title: string;
  slug: string;
  gallery: BlogImage[];
  category: string;
  createdFrom: string;
  description: string;
}

export interface QueryParams {
  page?: number;
  categoryId?: string;
  limit?: number;
  sort?: string;
  order?: string;
  name?: string;
}
export interface StaticPage {
  title: string;
  slug: string;
  content: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  wishlist: any[];
  cart: any[];
}
