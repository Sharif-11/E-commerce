import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import Cart from "../Components/Cart";
import CartItems from "../Components/CartItems";
import { CartContext } from "../Contexts/CartContext";
import { CartProduct } from "../Interfaces/products";
const products: CartProduct[] = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    url: "https://example.com",
    quantity: 2,
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
    url: "https://example.com",
    quantity: 1,
  },
];
describe("Cart Test", () => {
  it("should render cart component with cart items at carts", () => {
    const mockSetCart = vi.fn();
    const mockCartContextValue: [
      CartProduct[],
      React.Dispatch<React.SetStateAction<CartProduct[]>>
    ] = [
      products, // Initial cart state
      mockSetCart, // Mocked setCart function
    ];
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <CartItems />
      </CartContext.Provider>
    );
    const cartItemsComponents = screen.getAllByRole("cart-item");
    expect(cartItemsComponents).toHaveLength(2);
    cartItemsComponents.forEach((cartItem, index) => {
      expect(cartItem).toHaveTextContent(
        products[index].title.toString().substring(0, 16)
      );
      expect(cartItem).toHaveTextContent(products[index].price.toString());
      expect(cartItem).toHaveTextContent(products[index].quantity.toString());
      expect(cartItem.getElementsByTagName("button")).toHaveLength(3);
    });
  });
  it('should increase quantity of product when "increase" button is clicked', () => {
    const mockSetCart = vi.fn();
    const mockCartContextValue: [
      CartProduct[],
      React.Dispatch<React.SetStateAction<CartProduct[]>>
    ] = [
      products, // Initial cart state
      mockSetCart, // Mocked setCart function
    ];
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <CartItems />
      </CartContext.Provider>
    );
    const increaseButtons = screen.getAllByRole("increase");
    fireEvent.click(increaseButtons[0]);
    expect(mockSetCart).toHaveBeenCalled();
    expect(mockSetCart).toHaveBeenCalledWith([
      { ...products[0], quantity: 3 },
      products[1],
    ]);
  });
  it('should decrease quantity of product when "decrease" button is clicked', () => {
    const mockSetCart = vi.fn();
    const mockCartContextValue: [
      CartProduct[],
      React.Dispatch<React.SetStateAction<CartProduct[]>>
    ] = [
      products, // Initial cart state
      mockSetCart, // Mocked setCart function
    ];
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <CartItems />
      </CartContext.Provider>
    );
    const decreaseButtons = screen.getAllByRole("decrease");
    fireEvent.click(decreaseButtons[0]);
    expect(mockSetCart).toHaveBeenCalled();
    expect(mockSetCart).toHaveBeenCalledWith([
      { ...products[0], quantity: 1 },
      products[1],
    ]);
  });
  it('should remove product from cart when "decrease" button is clicked with quantity 1', () => {
    const mockSetCart = vi.fn();
    const mockCartContextValue: [
      CartProduct[],
      React.Dispatch<React.SetStateAction<CartProduct[]>>
    ] = [
      products, // Initial cart state
      mockSetCart, // Mocked setCart function
    ];
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <CartItems />
      </CartContext.Provider>
    );
    const decreaseButtons = screen.getAllByRole("decrease");
    fireEvent.click(decreaseButtons[1]);
    expect(mockSetCart).toHaveBeenCalled();
    expect(mockSetCart).toHaveBeenCalledWith([products[0]]);
  });
  it('should remove product from cart when "remove" button is clicked', () => {
    const mockSetCart = vi.fn();
    const mockCartContextValue: [
      CartProduct[],
      React.Dispatch<React.SetStateAction<CartProduct[]>>
    ] = [
      products, // Initial cart state
      mockSetCart, // Mocked setCart function
    ];
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <CartItems />
      </CartContext.Provider>
    );
    const removeButtons = screen.getAllByRole("remove");
    fireEvent.click(removeButtons[0]);
    expect(mockSetCart).toHaveBeenCalled();
    expect(mockSetCart).toHaveBeenCalledWith([products[1]]);
  });
  it("should render total price of all products in cart", () => {
    const mockSetCart = vi.fn();
    const mockCartContextValue: [
      CartProduct[],
      React.Dispatch<React.SetStateAction<CartProduct[]>>
    ] = [
      products, // Initial cart state
      mockSetCart, // Mocked setCart function
    ];
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </CartContext.Provider>
    );
    const totalPrice = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    const totalPriceElement = screen.getByRole("total-price");
    expect(totalPriceElement).toHaveTextContent(totalPrice.toString());
  });
});
