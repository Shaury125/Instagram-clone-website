import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-5">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="text-6xl mb-6">
          🚀
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base leading-6 mb-6">
          This page is currently under development. 
          We’re working hard to bring something amazing for you.
        </p>

        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-600 mb-7">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Work in Progress
        </div>

        {/* Back Button */}
        <div>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ComingSoon;