import React, {useState} from "react";
import WithCounter from "./WithCounter";

function ClickCounter(props) {
    return <div onClick={props.incrementCount}>Click:{props.count}</div>
}

export default WithCounter(ClickCounter);