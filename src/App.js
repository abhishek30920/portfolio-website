import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import EventPlanner from "./components/Calendar/EventPlanner" 
import {EventContextProvider} from "./components/Calendar/EventContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartRouter from "./components/Cart/CartRouter";
import {CartContextProvider} from "./components/Cart/CartBody/CartContext";
import Scarne from "./components/Scarne/Scarne";

function App() {
    return (
        <section>
            {/* <EventContextProvider>
                <EventPlanner />
            </EventContextProvider> */}
            <CartContextProvider>
                 <CartRouter />
            </CartContextProvider>
        </section>
    );
}

export default App;