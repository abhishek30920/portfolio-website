import React from 'react';
import AddShoppingCart from "@mui/icons-material/AddShoppingCart"
import ShoppingCart from "@mui/icons-material/ShoppingCart"
import "./styles/CartHeader.css";
import { Link, useNavigate } from 'react-router-dom';
import CartSearch from "./CartBody/CartSearch";



//RemoveShoppingCart - AddShoppingCart
function CartHeader() {
  return (
    <section id="cart-header-wrapper">
        <Link to="/cart"><h1>E-Cart</h1></Link>
        
        <CartSearch />
        <Link to="/shopping-cart"><ShoppingCart /></Link>
    </section>
  )
}

export default CartHeader