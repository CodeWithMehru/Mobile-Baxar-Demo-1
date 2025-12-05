import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-px bg-gray-700"></div>

          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              to="#"
              className="text-sm text-gray-500 hover:text-gray-300 transition"
            >
              Terms & Conditions
            </Link>
            <Link
              to="#"
              className="text-sm text-gray-500 hover:text-gray-300 transition"
            >
              Privacy Policy
            </Link>
          </div>

          <p className="text-xs text-center">
            Developed by{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
              NEXTGEN IT TECHNOLOGIES
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
