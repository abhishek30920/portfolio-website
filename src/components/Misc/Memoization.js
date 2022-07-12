import React, {useMemo,useState, useCallback} from 'react'

function Memoization() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const isEven = useCallback(()=>{
        let i=0;
        while(i<400000000)i++;
        return counterOne%2===0;
    },[counterOne]);

    const handleCounterOne = () =>{
        setCounterOne(counterOne+1);
    }

    const handleCounterTwo = () =>{
        setCounterTwo(counterTwo+1);
    }



  return (

    <div>
        <h1>Memoization</h1>
        <div><button onClick={handleCounterOne}>CounterOne:{counterOne}</button>{isEven() ? 'Even' : 'Odd'}</div>
        <button onClick={handleCounterTwo}>CounterTwo:{counterTwo}</button>
    </div>
  )
}

export default Memoization