import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const { products, loading, error } = useProducts();
  console.log({ products });
  if (loading) {
    return (
      <span className="loading loading-bars loading-xl m-8 flex justify-center mx-auto"></span>
    );
  }
  if (error) {
    return <div className="my-8 mx-5">Error: {error}</div>;
  }
  return (
    <div className="my-8 mx-5">
      <h3 className="text-center mt-5 mb-8 font-bold text-3xl">All Products</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.title}
            price={product.price}
            url={product.url}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
