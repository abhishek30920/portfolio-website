import React, {useState, useContext} from "react";

const CartContext = React.createContext();

export function useCartContext(){
    return useContext(CartContext);
}

export function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);
    const [products, setProducts] = useState(null);
    const [popularProducts, setPopularProducts] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [allProducts, setAllProducts] = useState(null);

    const filterCartList =(name) =>{
        let out = [];
        out = cartList.filter((e,index)=>{
            return e.name!=name;
        });
        setCartList(out);
    }

    const value = {
        cartList,
        setCartList,
        filterCartList,
        products,
        setProducts,
        popularProducts,
        setPopularProducts,
        reviews,
        setReviews,
        allProducts,
        setAllProducts
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
