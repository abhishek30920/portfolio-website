import React, { useState, useEffect } from "react";
import { useCartContext } from "./CartContext";
import Rating from "@mui/material/Rating";
import Modal from "../../Generic/Modal/Modal"

const background = [];

function ProductCartCard({ p }) {
    const { cartList, setCartList } = useCartContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [random, setRandom] = useState(0);

    useEffect(() => {
        let rand = Math.round(Math.random() * 10) % 4;
        setRandom(rand);
    }, [random]);

    const onModalClose = (e) =>{
        e.stopPropagation()
        setIsModalOpen(false);
    }

    const openModal = (e) =>{
        e.stopPropagation();
        setIsModalOpen(true);
    }

    const handleBuyClick = () => {
        setCartList([...cartList, p]);
    };

    return (
        <section onClick={openModal} style={{ backgroundColor: "white", backgroundSize: "cover" }} id="product-card">
            <h1>{p.name}</h1>
            <section id = "product-rating-buy-wrapper">
                <Rating name="half-rating-read" value={p.rating} readOnly />
                <button style={{ cursor: "pointer" }} onClick={handleBuyClick}>
                    Buy
                </button>
            </section>
            <section id="product-price-wrapper">
                <p>Price: {p.price}</p>
                <p>Discounted Price: {p.discountedPrice}</p>
            </section>
            <Modal 
                open = {isModalOpen}
                onClose={onModalClose}
                title="Modal opened"
            >
                <h1>{p.name}</h1>
            </Modal>
        </section>
    );
}

export default ProductCartCard;
