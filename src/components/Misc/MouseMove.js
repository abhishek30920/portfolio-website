import React, {useState} from "react";

export default function MouseMove(){

    const handleMouseMove = () =>{
        console.log("Mouse move:");
    }

    const debounce = (callback,interval) =>{
        let timer;
        return function() {
            clearTimeout(timer);
            timer = setTimeout(()=>{
                callback();
            },interval);
        }
    }

    const throttle = (callback, interval) =>{
        let timer;
        return function() {

            var later = ()=>{
                timer=false;
            }

            if(!timer) {
                timer=true;
                callback();
                setTimeout(later,interval);
            }
        }
    }

    const implementDebounce = debounce(handleMouseMove,500);    // Infinite scroll , Search

    const implementTrottle = throttle(handleMouseMove,1000); // Resize of window, logging system

    return <div style={{backgroundColor:"red"}} onMouseMove={implementTrottle}>Hello</div>
}

// Throttling : At max how many times a function will be called in a time interval