import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <Link to="/">
          <div className="text-white font-bold text-lg">Antarika</div>
        </Link>

        {/* Center - Nav Items */}
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/aboutus" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/checkup" className="text-gray-300 hover:text-white">
            Check Up
          </Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
          <Link to="/usersignup" className="text-gray-300 hover:text-white">
            User Sign Up
          </Link>
        </div>

        {/* Right side - Sign In and Therapist Sign Up */}
        <div className="flex space-x-4">
          <Link
            to="/signin"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </Link>
          <Link
            to="/therapistsignup"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Therapist Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
