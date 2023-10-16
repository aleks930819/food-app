export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  imageURL: string;
  categories: Category[];
  reviews: number;
  discount: number;
  quantity: number;
  gallery: BlogImage[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
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
  limit?: number;
  sort?: string;
  order?: string;
  name?: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  wishlist: any[];
  cart: any[];
}
