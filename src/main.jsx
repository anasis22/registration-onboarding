import React from "react";
import ReactDOM from "react-dom/client";
import ScreenOne from "./components/ScreenOne.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFound from "./components/NotFound.jsx";
import ScreenTwo from "./components/ScreenTwo.jsx";
import { DataProvider } from "./contexts/DataContexts.jsx";
import ScreenThree from "./components/ScreenThree.jsx";
import ScreenFour from "./components/ScreenFour.jsx";
import PrivateRoute from "./contexts/PrivateRoute.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenOne />,
  },
  {
    path: "/ScreenTwo",
    element: <ScreenTwo />,
  },
  {
    path: "/ScreenThree",
    element: <ScreenThree />,
  },
  {
    path: "/ScreenFour",
    element: <ScreenFour />,
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
