import React, {useState, useEffect, useRef} from "react";
import TodoApp from "../../TodoApp/TodoApp";
import { TodoContextProvider } from "../../TodoApp/TodoContext";
import PopularSlider from "./PopularSlider";
import ReviewSlider from "./ReviewSlider";
import ProductCatergory from "./ProductCatergory";
import ShoppingCart from "./ShoppingCart";
import LinearProgress from "../../Generic/LinearProgress/LinearProgress";
import ProjectAccordian from "./ProjectAccordian";
import Scarne from "../../Scarne/Scarne";
// Search Bar

function CartBody() {

    const [scrolled, setScrolled] = useState(1);

    useEffect(()=>{
        setInterval(()=>{
            setScrolled(window.scrollY);
        },200)
    });

    return (
        <section>
            {/* <LinearProgress value ={scrolled}/> */}
            <ProductCatergory />
            <PopularSlider />
            <TodoContextProvider>
                <TodoApp />
            </TodoContextProvider>
            <ReviewSlider />
            <ProjectAccordian />
            <Scarne />
        </section>
    );
}

export default CartBody;
