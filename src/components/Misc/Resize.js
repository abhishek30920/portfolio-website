import React, {useEffect,  useState, useRef,useLayoutEffect} from 'react'

function Resize() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    let refrence = useRef(null);
    useEffect(()=>{
            window.addEventListener("resize",updateResize);
    },[])

    useLayoutEffect(()=>{
        return () =>{
            window.removeEventListener("resize", updateResize);
        }
    },[]);

    const updateResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

  return (
    <div>
        <p>{width}</p>
        <p>{height}</p>
    </div>
  )
}

export default Resize