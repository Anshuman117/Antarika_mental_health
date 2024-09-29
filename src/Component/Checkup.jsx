import { Link } from "react-router-dom";

const Checkup = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between px-16 min-h-screen bg-blue-200">
        <div className="p-10 md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Mental Health Check Up.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Check your general mental health for Free.
          </p>
          <Link to="https://www.mind-diagnostics.org/depression-test">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Check Up
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.tulasihealthcare.com/wp-content/uploads/2023/01/Imp-mental-health-1024x576.webp"
            alt="Mental Health"
            className="object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkup;
