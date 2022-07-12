import React, {useState, useEffect} from 'react'
import "./styles/ShoppingCart.css";
import { useCartContext } from "./CartContext";

function ShoppingCart() {
    const [price, setPrice] = useState(0);

    const { cartList, setCartList, filterCartList } = useCartContext();

    useEffect(() => {
        let out = 0;
        cartList.forEach(element => {
            out+=element.discountedPrice            
        });
        setPrice(out);
    }, [cartList]);

    const handleRemoveProduct = (name) => {
        filterCartList(name);
    }

    const getShoppingCartCards = () =>{
        return <section>
            {cartList.map((product, index)=>{
                return <section key={index} id="shopping-cart-card">
                    <h1>{product.name}</h1>
                    <section>
                        <p>{product.price}</p>
                        <p>{product.discountedPrice}</p>
                    </section>
                    <button onClick={()=>{handleRemoveProduct(product.name)}}>Remove</button>
                </section>
            })}
        </section>
    }

  return (
    <section id="shopping-cart-wrapper">
        {price ? <h1>Total Price: {price}</h1>:<></>}
        {getShoppingCartCards()}
    </section>
  )
}

export default ShoppingCart