import React, { useState, useEffect, useRef } from "react";
// import "./styles/StaticComp.css";

//Counter - increment counter after every second

function StaticComp() {

    const [time, setTime] = useState(new Date());
    const [count, setCount] = useState(0)
    var timer = useRef();


    useEffect(()=>{
        timer = setInterval(()=>{
            setCount(count+1)
        },1000);
    })

    useEffect(()=>{ //component will unmount
        return () =>{
            clearInterval(timer);
        }
    })

    return(
        <section>
            <h1 style={{color:"green"}}>Static component</h1>
            <div id="firstDiv">{count}</div>
        </section>
    )
}

export default StaticComp

//Casing
// camel casing : camelCase backgroundColor:
// kebab casing : kebab-case-something
// pascal casing : PascalCasing
// snake casing : snake_casing_something


//ERROR BOUNDRIES : 


// Controlled vs uncontrolled Components
// Whose behaviour react can change:
//Whose behaviour react cannot controll ? - DOM

// useRef - If it change, It doesn't trigger a rerender.

//componentDidUpdate using useEffect ? 

//Key board shortcuts : 
// alt + tab : swicth b/w application
// ctrl + tab : switch b/w files/tabs ins chrome
// ctrl+shift+tab - above thing anti clock wise
// ctrl + R : Refresh a page
// ctrl + w : close a tab
// ctrl + t : open new tab
// ctrl + e : search sth in url
// ctrl+shift+t : open recently closed tab

// ctrl+z : to undo
// ctrl + y : redo
// ctrl+d : selecting duplicated
// ctrl+shift+h : search bar


// state & props - Rerenders the component + if parent re renders
//class based components : 
//Mounting
    //constructor
    //static getDerivedStateFromProps()
    //render
    //componendDidMount()

//Updating
    //static getDerivedStateFromProps()
    // shouldComponentyUpdate
    //render
    //getSnapshotBeforeUpdate
    //componentDidUpdate

//unmounting
    //componentWillUnmount


// Functional components
    //useState
    //useEffect
    //useRef
 

