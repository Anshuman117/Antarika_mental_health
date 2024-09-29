// components/Layout.jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  // Define the paths where the Navbar should be hidden
  const hideNavbarRoutes = ["/signup", "/login"];

  return (
    <div>
      {/* Conditionally render the Navbar based on the current path */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      {/* This is where the specific page content will be rendered */}
      <Outlet />
    </div>
  );
};

export default Layout;
