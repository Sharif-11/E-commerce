import axios from "axios";
import { Product, ProductBody } from "../Interfaces/products";
import { generateRandomPrice } from "../Utils/randomPricegenerator";

export const fetchProductsBody = async () => {
  const result = axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = (await result).data;
  return data;
};
export const fetchProductsImage = async () => {
  const result = axios.get("https://jsonplaceholder.typicode.com/photos");
  const data = (await result).data;
  return data;
};
export const fetchProducts = async () => {
  const products = fetchProductsBody();
  const images = fetchProductsImage();

  const productDetails = await Promise.all([products, images]);
  const result: Product[] = [];
  productDetails[0].forEach((product: ProductBody, index: number) => {
    result.push({
      id: product.id,
      title: product.title,
      price: generateRandomPrice(),
      url: productDetails[1][index].url,
    });
  });
  return result;
};
