import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const { cartAmount } = useCart();

  return (
    <header className="bg-slate-400 flex h-[3rem] w-full">
      <nav className="flex justify-between items-center w-full mx-20">
        <Link className="font-bold text-xl" to="/">
          DevStore
        </Link>

        <Link className="relative" to="/cart">
          <FiShoppingCart size={24} />
          {cartAmount > 0 && (
            <span className="absolute -top-1.5 -right-3 font-bold text-xs w-4 h-4 bg-blue-200 flex justify-center items-center text-black px-2 py-1 rounded-full">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};
