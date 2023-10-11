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
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Blog {
  id: number;
  createdAt: string;
  updatedAt: string;
  image: string;
  title: string;
  slug: string;
  category: string;
  createdFrom: string;
  description: string;
}
