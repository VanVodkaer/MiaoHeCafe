import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./animation.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./component/HomePage/";
import Info from "./component/Info";
import Map from "./component/Map";
import Contact from "./component/Contact";
import Social from "./component/Social";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/info",
    element: <Info />,
  },

  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/social",
    element: <Social />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
