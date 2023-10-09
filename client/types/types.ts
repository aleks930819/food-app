export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  imageURL: string;
  tags: string[];
  reviews: number;
  discount: number;
  quantity: number;
}
