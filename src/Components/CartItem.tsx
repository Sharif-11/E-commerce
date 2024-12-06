import { CartProductProps } from "../Interfaces/products";

const CartItem = ({ id, name, price, url, quantity }: CartProductProps) => {
  return (
    <li className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src={url} alt={name} className="size-full object-cover" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{name}</a>
            </h3>
            <p className="ml-4">${price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex gap-2 flex-wrap">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 p-2 btn btn-sm"
            >
              +
            </button>
            <p className="text-gray-500 p-2">{quantity}</p>
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 p-2 btn btn-sm"
            >
              -
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
