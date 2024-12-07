import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { ProductProps } from "../Interfaces/products";

const Product = ({
  id,
  name,
  price,
  url = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
}: ProductProps) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const isExist = cart.find((product) => product.id === id);
    if (!isExist) {
      setCart([...cart, { id, title: name, price, url, quantity: 1 }]);
    } else {
      // const filteredCart = cart.filter((product) => product.id !== id);
      // const updatedProduct = { ...isExist, quantity: isExist.quantity + 1 };
      // setCart([...filteredCart, updatedProduct]);
      const updatedCart = cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart(updatedCart);
    }
  };
  return (
    <div
      className="card card-compact bg-base-100 w-[250px] shadow-xl"
      role="product"
    >
      <figure>
        <img src={url} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.substring(0, 16)}</h2>
        <h4 className="font-bold">Price: ${price}</h4>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={addToCart}
            role="button"
            name="add to cart"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
