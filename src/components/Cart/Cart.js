import React, {useEffect} from 'react';
import CartBody from "./CartBody/CartBody";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import { getReviews,getPopularProducts} from "./CartClient";
import {useCartContext} from "./CartBody/CartContext";


function Cart() {
  const { setPopularProducts, setReviews} = useCartContext();

  useEffect(()=>{
      getReviews(setReviews);
      getPopularProducts(setPopularProducts);
  },[]);

  return (
    <section>
        <CartBody />
    </section>
  )
}

export default Cart