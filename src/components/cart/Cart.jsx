"use client";
import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { selectProductsTotalPrice } from "@/redux/cart/cart-selector";
import CustomButton from "../customButton/CustomButton";
import { BsCartCheckFill } from "react-icons/bs";
import ModalConfirmRequest from "../modal/ModalConfirmRequest";
import { useState } from "react";


export default function Cart({ isVisible, setIsVisible }) {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector(rootReducer => rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 bg-white bg-opacity-70 flex justify-end transition-all duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
    >
      <div className="w-full" onClick={handleEscapeAreaClick}></div>
      
      <div className="h-full max-w-[80%] bg-white p-5 overflow-y-scroll md:min-w-[40%]">
        <p className="text-lg font-semibold mb-4 text-black">Seu Carrinho</p>
        
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        
        <p className="font-semibold text-base mb-4 text-black">
          Total: R${productsTotalPrice}
        </p>

        <div className="w-[50%]">
          <CustomButton
            className="invisible opacity-0 transition-all duration-500 m-5 group-hover:visible group-hover:opacity-100"
            customHover="hover:bg-orange-500"
            startIcon={<BsCartCheckFill />}
            onClick={() => setOpen(true)}
          >
            Finalizar Pedido
          </CustomButton>
        </div>
      </div>
      <ModalConfirmRequest 
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}


