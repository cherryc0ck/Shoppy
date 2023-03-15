import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Main from "pages/Main";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{ index: true, element: <Main /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
