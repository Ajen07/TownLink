export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  image: string;
  category: string; // New category field
}
