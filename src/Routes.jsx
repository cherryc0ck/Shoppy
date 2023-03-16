import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "pages/Home";
import AllProducts from "pages/AllProducts";
import NewProducts from "pages/NewProducts";
import ProductDetail from "pages/ProductDetail";
import NotFound from "pages/NotFound";
import MyCart from "pages/MyCart";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/products", element: <AllProducts /> },
        { path: "/products/new", element: <NewProducts /> },
        { path: "/products/:id", element: <ProductDetail /> },
        { path: "/carts", element: <MyCart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
