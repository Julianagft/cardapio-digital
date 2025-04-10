import { useSelector } from "react-redux";

import CartItem from "../cartItem/CartItem";
import { selectProductsTotalPrice } from "@/redux/cart/cart-selector";


export default function Cart ({ isVisible, setIsVisible }) {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const {products} = useSelector(rootReducer => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <div
    className={`fixed inset-0 bg-black bg-opacity-70 flex justify-end transition-all duration-300 ${
      isVisible ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  >
    <div className="w-full" onClick={handleEscapeAreaClick}></div>
    <div className="h-full min-w-[500px] z-200 bg-white p-5 overflow-y-scroll md:min-w-[85%]">
      <p className="text-lg font-semibold mb-4">Seu Carrinho</p>
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <p className="font-semibold text-base mb-4">Total: R${productsTotalPrice}</p>
    </div>
  </div>
  );
};


