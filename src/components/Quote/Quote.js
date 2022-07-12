import React, {useState, useEffect} from "react";
import {fetchRandomQuote} from "./QuoteClient";
import "./styles/Quote.css";

export default function Quote() {

    const [quote, setQuote]  = useState("");

    useEffect(()=>{
        fetchRandomQuote(setQuote);
    },[])

    const handleRefreshClick = () =>{
        fetchRandomQuote(setQuote);
    } 

    return <section id="quote-wrapper" >
        <section id="quote-display-wrapper">
            {quote}
        </section>
        <div id="quote-refresh-button" onClick={handleRefreshClick}>Refresh</div>
    </section>
} 
