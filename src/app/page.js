"use client";
import Header from "@/components/header/Header";
import ProductItem from "@/components/productItem/ProductItem";
import Products from "@/components/products/Products";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>     
      <div>
        <Header />
        <Products />  
      </div>
    </Provider>
  );
}
