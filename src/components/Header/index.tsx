import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-400 flex h-[3rem] w-full">
      <nav className="flex justify-between items-center w-full mx-20">
        <Link className="font-bold text-xl" to="/">
          DevStore
        </Link>

        <Link className="relative" to="/cart">
          <FiShoppingCart size={24} />
          <span className="absolute px-2.5 text-sm bg-blue-200 rounded-full flex justify-center items-center w-5 h-5 -right-3 -top-3">
            2
          </span>
        </Link>
      </nav>
    </header>
  );
};
