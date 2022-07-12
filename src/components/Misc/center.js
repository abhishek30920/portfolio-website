import React, {useState, useEffect} from "react";
import "./styles/center.css";

function Center() {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count+1);
        },1000);
        return ()=>{
            clearInterval(timer);
        }
    })

    const handleDelegationClick = (event) =>{
        console.log(event.target.id)
    }

    const handleMouseMove = (event)=>{
        console.log("moved",count);
    }

    const debounce = (callback, interval) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(()=>{
                callback(args);
            },interval);
        }
    }


    const throttle = (callback,interval) => {
        var timer;
        return (...args)=>{

            const later = () => {
                timer=false;
            }

            if(!timer) {
                timer=true;
                callback(args);
                setTimeout(later,interval);
            }
        }
    }


    const applyDebounce = debounce(handleMouseMove, 2000);
    const applyThrottle = debounce(handleMouseMove,1000);

    return(
        <div className="parentDiv" onMouseMove={applyThrottle}>
            <div className="childDiv">           
            </div>
        </div>
    )
}

export default Center;