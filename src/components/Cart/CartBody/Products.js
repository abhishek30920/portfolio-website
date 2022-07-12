import React, { useState, useEffect } from "react";
import ProductCartCard from "./ProductCartCard";
import { useCartContext } from "./CartContext";
import CircularProgress from "@mui/material/CircularProgress";
import { getProducts } from "../CartClient";
import {LAPTOPS,
    AIR_CONDITIONER,
    MOBILE,
    TELEVISION} from "./CatrgoryConstants";

    let ProductsObj = {
        "AIR_CONDITIONER" : AIR_CONDITIONER,
        "TELEVISION": TELEVISION,
        "MOBILE": MOBILE,
        "LAPTOPS": LAPTOPS
    }

function Products() {
    const [productCategory, setProductCategory] = useState("LAPTOPS");
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(null);
    const [activePage, setActivePage] = useState(1);

    const { allProducts, setAllProducts } = useCartContext();

    // useEffect(() => {
        // getProducts(setProducts);
        // let str = window.location.pathname;
        // setProductCategory(str.split("/")[2]);
        // setCurrentPage(allProducts.slice((activePage-1)*5, (activePage)*5))
    // }, []);

    const handleSortClick = () => {
        setIsSortOpen(!isSortOpen);
    };

    // const sortBasedOnCondition = (sortCategory) => {
    //     let temp = JSON.parse(JSON.stringify(Products));        //deepCopy
    //     let out = Products[productCategory].slice(0);           //deepcopy
    //     if (sortCategory === "Rating") {
    //         out.sort(function (a, b) {
    //             return b.rating - a.rating;
    //         });
    //     } else {
    //         out.sort(function (a, b) {
    //             return (b.price - b.discountedPrice) - (a.price - a.discountedPrice);
    //         });
    //     }
    //     temp[productCategory] = out;
    //     setProducts(temp);
    // };

    // const sortData = (e) => {
    //     e.stopPropagation();
    //     sortBasedOnCondition(e.target.id);
    // };

    // const getSortMenu = () => {
    //     return (
    //         <section>
    //             <div onClick={handleSortClick}>Sort</div>
    //             {isSortOpen ? (
    //                 <div onClick={sortData}>
    //                     <p id="Rating">Rating</p>
    //                     <p id="Discount">Discount</p>
    //                 </div>
    //             ) : (
    //                 <></>
    //             )}
    //         </section>
    //     );
    // };

    // const handlePageClick = (e) =>{
    //     e.stopPropagation();
    //     setActivePage(e.target.id);
    //     setCurrentPage(allProducts.slice((e.target.id-1)*5, (e.target.id)*5))
    // }

    // const getPagination = () =>{
    //     let spanCount = Math.ceil(allProducts.length/5);
    //     let out = [];
    //     for(let i=0;i<spanCount;i++){
    //         out.push(0);
    //     }
    //     return <section>
    //         <section id="pagination-page-wrapper" onClick={handlePageClick}>
    //             {
    //                 out.map((e,index)=>{
    //                     return <span className={index+1==activePage ? "active-page" : ""} id={index+1} key={index}>{index+1}</span>
    //                 })
    //             }
    //         </section>
    //         <section>
    //             {
    //                 currentPage && currentPage.map((product,index)=>{
    //                 return <ProductCartCard key={index} p={product} />;
    //                 })
    //             }
    //         </section>
            
    //     </section>
    // }

    // if (!products) return <CircularProgress />;
    return (
        <section id="products-wrapper">
            {/* {getPagination()} */}
            {/* {getSortMenu()} */}
            {ProductsObj[productCategory] &&
                ProductsObj[productCategory].map((elem, index) => {
                    return <ProductCartCard key={index} p={elem} />;
                })}
        </section>
    );
}

export default Products;
