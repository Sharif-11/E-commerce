interface ProductProps {
  url: string;
  name: string;
  price: number;
}

const Product = ({
  name,
  price,
  url = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
}: ProductProps) => {
  return (
    <div className="card card-compact bg-base-100 w-[250px] shadow-xl">
      <figure>
        <img src={url} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h4 className="font-bold">Price: ${price}</h4>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
