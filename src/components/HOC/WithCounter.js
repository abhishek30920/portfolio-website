import React, { useState } from "react";

function WithCounter(OriginalComponent) {
    function NewComponent() {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
            setCount(count + 1);
        };

        return <OriginalComponent count={count} incrementCount={incrementCount}/>
    }
    return NewComponent;
}

export default WithCounter;




//Pure function : Returns same output for same input.

//When do a component re renders : State, props,

//event propagation/ event bubbleing/ event trickling/ event delegation

//Debouncing and throttling/ HOC / useMemo/ useCallback / Todo App - useContext

//event Propagation :
/*

Event : some kind of action : scroll, click, mousemove etc

Event Propagation(increasing in number) : stack of Events which are fired in a page.


Event bubbling/ Trickling :


bubbling : Goes from bottom to top. 

Event buubling : It will move the event triggring from bottom to up in nested heirarchy.

Event Trickling : Event triggered moves top to bottom in nested heirarchy.


Event Trickling Happens then Event Bubbling Happens

<div onClick{outerDivClick}>
    <div onClick={innerDivClick}>
        <p onClick={paraClick}>click me</p>
        <p>some para</p>
    </div>
</div>

*/
