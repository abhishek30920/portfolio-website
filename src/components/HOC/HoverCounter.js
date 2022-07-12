import React, {useState} from "react";
import WithCounter from "./WithCounter";

function HoverCounter(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () =>{
        setCount(count+1);
    }

    return <div onMouseOver={props.incrementCount}>Hover : {props.count}</div>
}

export default WithCounter(HoverCounter);




//useMemo - Memoization : Optimization technique, where we store previously calculated output. And if ssame input is incountered we return the stored output without calculating it again