export interface ProductBody {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface ProductImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  url: string;
}
export interface CartProduct extends Product {
  quantity: number;
}
export interface ProductProps {
  id: number;
  url: string;
  name: string;
  price: number;
}
export interface CartProductProps extends ProductProps {
  quantity: number;
}
