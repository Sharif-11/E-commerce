import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Product from "../Components/Product";
import { CartContext } from "../Contexts/CartContext";
import { CartProduct } from "../Interfaces/products";

describe("Add To Cart Test", () => {
  it("should add product to empty cart", () => {
    const mockSetCart = vi.fn();
    const mockCartContextValue: [
      CartProduct[],
      React.Dispatch<React.SetStateAction<CartProduct[]>>
    ] = [
      [], // Initial cart state
      mockSetCart, // Mocked setCart function
    ];
    const product = {
      id: 1,
      title: "Product 1",
      price: 100,
      url: "https://example.com",
    };
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <Product
          id={product.id}
          key={product.id}
          name={product.title}
          url={product.url}
          price={product.price}
        />
      </CartContext.Provider>
    );
    const button = screen.getByRole("button", { name: /add to cart/i });

    // Simulate a click event on the button
    fireEvent.click(button);
    expect(mockSetCart).toHaveBeenCalled();
    expect(mockSetCart).toHaveBeenCalledWith([{ ...product, quantity: 1 }]);
  });
  it("should increment quantity of product if it already exists in cart", () => {
    const mockSetCart = vi.fn();
    const mockCartContextValue: [
      CartProduct[],
      React.Dispatch<React.SetStateAction<CartProduct[]>>
    ] = [
      [
        {
          id: 1,
          title: "Product 1",
          price: 100,
          url: "https://example.com",
          quantity: 1,
        },
        {
          id: 2,
          title: "Product 2",
          price: 200,
          url: "https://example.com",
          quantity: 2,
        },
      ], // Initial cart state
      mockSetCart, // Mocked setCart function
    ];
    const product = {
      id: 1,
      title: "Product 1",
      price: 100,
      url: "https://example.com",
    };
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <Product
          id={product.id}
          key={product.id}
          name={product.title}
          url={product.url}
          price={product.price}
        />
      </CartContext.Provider>
    );
    const button = screen.getByRole("button", { name: /add to cart/i });

    // Simulate a click event on the button
    fireEvent.click(button);
    expect(mockSetCart).toHaveBeenCalled();
    expect(mockSetCart).toHaveBeenCalledWith([
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
        quantity: 2,
      },
    ]);
  });
  it("should add product to cart if it does not exist in cart", () => {
    const mockSetCart = vi.fn();
    const mockCartContextValue: [
      CartProduct[],
      React.Dispatch<React.SetStateAction<CartProduct[]>>
    ] = [
      [
        {
          id: 1,
          title: "Product 1",
          price: 100,
          url: "https://example.com",
          quantity: 1,
        },
        {
          id: 2,
          title: "Product 2",
          price: 200,
          url: "https://example.com",
          quantity: 2,
        },
      ], // Initial cart state
      mockSetCart, // Mocked setCart function
    ];
    const product = {
      id: 8,
      title: "Product 1",
      price: 100,
      url: "https://example.com",
    };
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <Product
          id={product.id}
          key={product.id}
          name={product.title}
          url={product.url}
          price={product.price}
        />
      </CartContext.Provider>
    );
    const button = screen.getByRole("button", { name: /add to cart/i });

    // Simulate a click event on the button

    fireEvent.click(button);
    expect(mockSetCart).toHaveBeenCalled();
    expect(mockSetCart).toHaveBeenCalledWith([
      {
        id: 1,
        title: "Product 1",
        price: 100,
        url: "https://example.com",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        price: 200,
        url: "https://example.com",
        quantity: 2,
      },
      {
        id: 8,
        title: "Product 1",
        price: 100,
        url: "https://example.com",
        quantity: 1,
      },
    ]);
  });
});
