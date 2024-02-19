import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { ProductsProps } from "../../types/HomeTypes";

export const Home = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getData();
  }, []);

  const { addToCart } = useCart();

  function handleAddCart(product: ProductsProps) {
    addToCart(product);
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="text-center text-2xl font-bold mt-5">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-col-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full ">
              <img
                className="w-full rounded-lg max-h-70 mb-2"
                src={product.cover}
                alt={product.title}
              />
              <p className="font-medium mt-1 ">{product.title}</p>
              <div className="flex gap-3 items-center">
                <strong className="text-zinc-700/50">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  onClick={() => handleAddCart(product)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <BsCartPlus />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};
