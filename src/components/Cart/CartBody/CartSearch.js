import React, {useState, useEffect} from "react";
import {useCartContext} from "./CartContext";

export default function CartSearch() {

    const  {products, allProducts, setAllProducts}  = useCartContext();
    const [searchedData, setSearchedData] = useState("");

    useEffect(()=>{
        let result = [];
        if(products) {
            for(let key in products){
                result.push(...products[key])
            }
        }
        setAllProducts(result);
    },[products]);

    const isSubSequence = (parent,subseq) =>{
        let count=0;
        let i=0,j=0;
        while(i<parent.length){ //abdbxbcbdbsgatsrtcb   bbsgt
            if(parent[i]===subseq[j]){
                i++;
                j++;
                count++;
            } else {
                i++;
            }
            if(count===subseq.length)
                return true;
        }
        return false;
    }

    const debounce = function(callback) {
        let timer;
        return function(event) {
            clearTimeout(timer);
            timer = setTimeout(()=>{
                callback(event);
            },500)
        }
    }


    const searchProducts = (value) => {
        if(!allProducts) return;
        if(!value){
            setSearchedData(null);
            return;
        }
        value = value.toLowerCase();
        let out = allProducts.filter((product)=>{
            product.name = product.name.toLowerCase();
            // if(product.name.includes(value))
            if(isSubSequence(product.name,value))
                return product.name;
        });
        setSearchedData(out);
    }

    const handleSearchChange = (e) => {
        searchProducts(e.target.value);
    }

    const getSearchedData = () => {
        return <section id="cart-search-show-data">
            {searchedData && searchedData.map((data, index)=>{
                return <div key={index}>
                <p>{data.name}</p>
                <p>{data.price}</p>
                <p>{data.rating}</p></div>
            })}
        </section>
    }

    const implementSearchDebounce = debounce(handleSearchChange);

    return <section id="cart-search-wrapper">
            <input onChange={(e)=>implementSearchDebounce(e)} placeholder="search" type="text"/>
                {getSearchedData()}
        </section>
}