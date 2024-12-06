import axios from "axios";
import { Product, ProductBody } from "../Interfaces/products";
import { generateRandomPrice } from "../Utils/randomPricegenerator";

export const fetchData = async (url: string) => {
  const result = axios.get(url);
  const data = (await result).data;
  return data;
};

export const fetchProducts = async () => {
  const products = fetchData("https://jsonplaceholder.typicode.com/posts");
  const images = fetchData("https://jsonplaceholder.typicode.com/photos");

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
