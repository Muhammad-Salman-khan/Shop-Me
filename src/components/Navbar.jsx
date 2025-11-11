import { useTheme } from "../context/ContextTheme.jsx";

const Navbar = () => {
  const { Theme, switchTheme } = useTheme();
  return (
    <>
      <div className="bg-gray-100 dark:bg-slate-950 border-b-2 border-gray-600 shadow transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
                {Theme}
              </span>
            </div>
            <div className="flex items-center">
              <button className="flex items-center bg-blue-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cart
                <span className="ml-2 bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"></span>
              </button>
              <button
                id="theme-toggle"
                onClick={switchTheme}
                className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
              >
                <svg
                  id="theme-icon-light"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <svg
                  id="theme-icon-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
