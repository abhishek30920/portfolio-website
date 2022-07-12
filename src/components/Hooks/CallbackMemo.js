// import React,{useCallback, useMemo, useState, useLayoutEffect, useReducer} from 'react';

// function Greet({isEven}) {
//     console.log("H")
//     return <h1>{isEven ? "Even" : "ODD"}</h1>
// }


// function CallbackMemo() {

//     const [counter, setCounter] = useState(0);
//     const [counter2, setCounter2] = useState(0);

//     const handleFirstClick = () =>{
//         setCounter(counter+1);
//     }

//     // useLayoutEffect(() => {
      
//     //     //Do task 
    
//     //   return () => {
//     //     // cleanup
//     //   };
//     // }[])

//     // const isEven = useMemo(() => {
//     //     let i=0;
//     //     while(i<2000000000)i++;
//     //     return counter%2===0
//     // },[counter])

//     // const getGreetings = useCallback(Greet(isEven) ,[isEven])

//     // const handleSecondClick = () =>{
//     //     setCounter2(counter2+1);
//     // }

//   return(
//     <div>
//         <button onClick={handleFirstClick}>Counter1:{counter}{isEven ? "Even" : "Odd"}</button>
//         {getGreetings}
//         <button onClick={handleSecondClick}>Counter2:{counter2}</button>
//     </div>
//   )
// }

// export default CallbackMemo