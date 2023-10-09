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
