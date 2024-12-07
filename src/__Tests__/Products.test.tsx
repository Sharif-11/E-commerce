import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Products from "../Components/Products";
import useProducts from "../Hooks/useProducts";

// Mock the useProducts hook
vi.mock("../Hooks/useProducts");

describe("Products", () => {
  it("should render loading component initially", () => {
    vi.mocked(useProducts).mockReturnValue({
      products: [],
      loading: true,
      error: null,
    });

    render(<Products />);
    expect(useProducts).toHaveBeenCalled();
    expect(screen.getByRole("loading")).toBeInTheDocument();
  });
  it("should render error component if error is present", () => {
    vi.mocked(useProducts).mockReturnValue({
      products: [],
      loading: false,
      error: "Error",
    });

    render(<Products />);
    expect(useProducts).toHaveBeenCalled();
    expect(screen.getByRole("error")).toBeInTheDocument();
  });
  it("should render products if no error and loading is false", () => {
    vi.mocked(useProducts).mockReturnValue({
      products: [
        {
          id: 1,
          title: "Product 1",
          price: 100,
          url: "https://example.com",
        },
        {
          id: 2,
          title: "Product 2",
          price: 200,
          url: "https://example.com",
        },
      ],
      loading: false,
      error: null,
    });

    render(<Products />);
    expect(useProducts).toHaveBeenCalled();
    expect(screen.getAllByRole("product")).toHaveLength(2);
  });
});
