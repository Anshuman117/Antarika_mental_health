import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./Component/Dashboard";
import Layout from "./Component/Layout"; // Import Layout
import "./index.css";
import Signup from "./Component/Signup";
import Usersignup from "./Component/Usersignup";
import SignIn from "./Component/Signin";
import Checkup from "./Component/Checkup";
import AboutUs from "./Component/Aboutus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps the routes
    children: [
      {
        path: "/",
        element: <App />, // Main landing page
      },
      {
        path: "/dashboard",
        element: <Dashboard />, // Dashboard route
      },
      {
        path: "/therapistsignup",
        element: <Signup />, // Dashboard route
      },
      {
        path: "/Usersignup",
        element: <Usersignup />, // Dashboard route
      },
      {
        path: "/signin",
        element: <SignIn />, // Dashboard route
      },
      {
        path: "/checkup",
        element: <Checkup />, // Dashboard route
      },
      {
        path: "/aboutUs",
        element: <AboutUs />, // Dashboard route
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
