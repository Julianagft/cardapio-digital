"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loginUser, logoutUser } from "../../redux/user/actions";
import { selectProductsCount } from "@/redux/cart/cart-selector"; 

import Cart from "../cart/Cart";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  const productsCount = useSelector(selectProductsCount);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({ nome: "Juliana", idade: 29 }));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="w-full bg-gray-900 flex justify-between text-gray-200 p-5 shadow-md">
      <div className="text-lg font-bold">Redux Shopping</div>
      <div className="flex items-center">
        {currentUser ? (
          <div
            onClick={handleLogoutClick}
            className="font-medium hover:cursor-pointer mr-10"
          >
            Sair
          </div>
        ) : (
          <div
            onClick={handleLoginClick}
            className="font-medium hover:cursor-pointer mr-10"
          >
            Login
          </div>
        )}
        <div
          onClick={handleCartClick}
          className="font-medium hover:cursor-pointer"
        >
          Carrinho ({productsCount})
        </div>
      </div>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </div>
  );
}

