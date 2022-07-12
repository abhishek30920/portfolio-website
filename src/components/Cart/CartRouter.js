import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./CartBody/CartContext";
// import GotoComponent from "../GotoComponent";
import Cart from "./Cart";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import Products from "./CartBody/Products";
import ShoppingCart from "./CartBody/ShoppingCart";
import InfiniteScroll from "../Generic/InfinitScroll/InfiniteScroll";
import Tabs from "../Generic/Tabs/Tabs";
import { LAPTOPS, AIR_CONDITIONER, MOBILE, TELEVISION } from "./CartBody/CatrgoryConstants";

function CartRouter() {
    const [prod, setProd] = useState("Products");

    return (
        <section>
            <BrowserRouter>
                <CartHeader />
                <Routes>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="/products/:id" element={<Products />} />
                    {/* <Route path="/infinite" element={<InfiniteScroll />} /> */}
                    <Route path="/tabs" element={<Tabs />} /> 
                </Routes>
                <CartFooter />
            </BrowserRouter>
        </section>
    );
}

export default CartRouter;
