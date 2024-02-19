import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Cart = () => {
  const { cart, total, addToCart, removeItemCart } = useCart();

  return (
    <div>
      {cart.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mt-10">
            Não há itens no carrinho
          </h1>
          <Link
            className="font-bold mt-5 bg-[#94A3B8] w-[150px] h-12 text-white flex justify-center items-center rounded-lg"
            to="/"
          >
            Volte as compras
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="font-medium text-2xl text-center mt-5">
            Carrinho de compras
          </h1>

          {cart.map((item) => (
            <section
              key={item.id}
              className="flex items-center justify-between border-b-2 border-gray-300"
            >
              <img className="w-28" src={item.cover} alt="" />
              <strong>
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => removeItemCart(item)}
                  className=" bg-slate-600 text-white font-medium flex items-center justify-center px-2 rounded"
                >
                  -
                </button>
                {item.amount}
                <button
                  onClick={() => addToCart(item)}
                  className=" bg-slate-600 text-white font-medium flex items-center justify-center px-2 rounded"
                >
                  +
                </button>
              </div>

              <strong className="float-right">
                SubTotal:
                {item.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </section>
          ))}

          <p className="font-bold mt-10">Total: {total}</p>
        </div>
      )}
    </div>
  );
};
