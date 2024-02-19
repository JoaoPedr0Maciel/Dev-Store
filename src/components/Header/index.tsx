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
            <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};
