import React from 'react'

function Events() {

    const handleTopDivClick = (e) =>{
        console.log("handleTopDivClick");
    }

    const handleNestedDivClick  = (e) =>{
        e.stopPropagation();
        console.log("handleNestedDivClick");
    }

    const handleParaClick  = (e) =>{
        console.log("handleParaClick");
    }
  return (
    <div onClick={handleTopDivClick}>
        <div onClick={handleNestedDivClick}>
            <p onClick={handleParaClick}>Click me</p>
        </div>
    </div>
  )
}

export default Events