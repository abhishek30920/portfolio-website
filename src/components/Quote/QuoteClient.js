import React from "react";
import axios from "axios";  

const RANDOM_QUOTE_URL = "https://api.quotable.io";

function fetchRandomQuote(setQuote) {
    axios(RANDOM_QUOTE_URL+"/random")
    .then((value)=>{
        setQuote(value.data.content);
        console.log(value.data.content);
    })
    .catch((error)=>{
        console.log(error);
    })
}

export {
    fetchRandomQuote
}