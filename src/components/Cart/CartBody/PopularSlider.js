import React from "react";
import Slider from "react-slick";
import PopularCard from "./PopularCard";
import "./styles/PopularSlider.css";
import { useCartContext } from "./CartContext";
import CircularProgress from "@mui/material/CircularProgress";

const settings = {
    classNname: "center",
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    slidesToShow: 3,
    speed: 500,
};

const POPULAR_PRODUCTS = [
    {
        name: "Iphone X",
        rating: 5,
        price: 50000,
        discountedPrice:45000
    },
    {
        name: "Sony Bravia",
        rating: 4,
        price: 90000,
        discountedPrice:70000
    },
    {
        name: "LG Super AC",
        rating: 4,
        discountedPrice:50000,
        price: 55000,
    },
    {
        name: "Iphone 13",
        rating: 5,
        price: 130000,
        discountedPrice:100000
    },
    {
        name: "Alexa Device",
        rating: 4,
        price: 5000,
        discountedPrice:4500
    },
    {
        name: "Sount System",
        rating: 4,
        price: 25000,
        discountedPrice:20000
    },
    {
        name: "JBL Moster 9000",
        rating: 5,
        discountedPrice:3000,
        price: 3500,
    },
];

function PopularSlider() {
    const { popularProducts } = useCartContext();

    const getSlider = () => {
        // if (!popularProducts) 
        // return <CircularProgress />;
        
        return (
            <Slider {...settings}>
                {
                    POPULAR_PRODUCTS.map((product, index) => {
                        return <PopularCard key={index} product={product} />;
                    })}
            </Slider>
        );
    };

    return <section id="popular-slider-wrapper">{getSlider()}</section>;
}

export default PopularSlider;
