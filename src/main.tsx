import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Cart from "./Components/Cart.tsx";
import Home from "./Components/Home.tsx";
import Products from "./Components/Products.tsx";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route index element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
