import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../Logo";

const Header = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="w-full py-4 2xl:py-6 px-10 font-fira bg-white bg-opacity-10 backdrop-blur-lg fixed z-10">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/">
            <Logo className="text-lg 2xl:text-2xl" />
          </Link>
        </div>

        <ul className="flex gap-x-4 text-white/80 font-semibold text-lg 2xl:text-2xl">
          <li>
            <button
              onClick={() => navigate("/")}
              className="inline-block px-4 py-2 duration-200 hover:bg-slate-900 hover:text-purple-400 rounded-2xl"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/jobs")}
              className="inline-block px-4 py-2 duration-200 hover:bg-slate-900 hover:text-purple-400 rounded-2xl"
            >
              Job Listings
            </button>
          </li>
        </ul>

        {isAuthenticated ? (
          <div className="flex justify-around items-center gap-x-6 2xl:gap-x-8">
            <button className="py-3 px-8 bg-orange-600 hover:opacity-70 rounded-lg text-white text-lg font-semibold transition-opacity">
              Logout
            </button>
          </div>
        ) : (
          <button className="py-3 px-8 bg-green-600 hover:opacity-70 rounded-lg text-white text-lg font-semibold transition-opacity">
            Register
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
