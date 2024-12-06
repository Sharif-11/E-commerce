import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const { products, loading, error } = useProducts();
  if (loading) {
    return <div className="my-8 mx-5">Loading...</div>;
  }
  if (error) {
    return <div className="my-8 mx-5">Error: {error}</div>;
  }
  return (
    <div className="my-8 mx-5 flex flex-wrap justify-center gap-8">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.title}
          price={product.price}
          url={product.url}
        />
      ))}
    </div>
  );
};

export default Products;
