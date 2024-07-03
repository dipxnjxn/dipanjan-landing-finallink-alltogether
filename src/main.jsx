import * as React from "react";
import App from '../src/App'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Err from "./components/error404/Err";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "lost",
    element: <Err/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);