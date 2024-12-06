import CartItem from "./CartItem";

const CartItems = () => {
  return (
    <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        <CartItem />
        <CartItem />
      </ul>
    </div>
  );
};

export default CartItems;
