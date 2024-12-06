import { useEffect, useState } from "react";
import { fetchProducts } from "../Api/fetchProducts";
import { Product } from "../Interfaces/products";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      return products;
    };
    fetchData()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export default useProducts;
