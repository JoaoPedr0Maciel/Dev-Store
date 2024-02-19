export const Cart = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center mt-5">
        Carrinho de compras
      </h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          className="w-28"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000"
          alt=""
        />
        <strong>R$3998</strong>
        <div className="flex items-center justify-center gap-3">
          <button className=" bg-slate-600 text-white font-medium flex items-center justify-center px-2 rounded">
            -
          </button>
          2
          <button className=" bg-slate-600 text-white font-medium flex items-center justify-center px-2 rounded">
            +
          </button>
        </div>

        <strong className="float-right">SubTotal: R$3998</strong>
      </section>
      <p className="font-bold mt-10">Total: 3998</p>
    </div>
  );
};
