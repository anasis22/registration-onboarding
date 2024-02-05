import React from "react";
import ReactDOM from "react-dom/client";
import ScreenOne from "./components/ScreenOne.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFound from "./components/NotFound.jsx";
import ScreenTwo from "./components/ScreenTwo.jsx";
import { DataProvider } from "./contexts/DataContexts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenOne />,
    errorElement: <NotFound />,
  },
  {
    path: "ScreenTwo",
    element: <ScreenTwo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
