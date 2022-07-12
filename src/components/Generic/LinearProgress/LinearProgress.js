import React, {useState, useEffect} from 'react';
import "./styles/LinearProgress.css";

function LinearProgress({value}) {
  const [entireHeight, setEntireHeight] = useState(1);
  const [percentageScrolled, setpercentageScrolled] = useState(1);

  const style = {
    ':after': {
      width: '30%'
    },
    border: '1px solid pink'
  };
  

  useEffect(()=>{
    var body = document.body, html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    setEntireHeight(height);
  },[])

  useEffect(()=>{
    console.log(entireHeight);
    let p = Math.round((value*100)/entireHeight);
    console.log(p,"p");
    setpercentageScrolled(p);
  },[value])

  //window.scrollY
  return (
    <section  className="linear-progress-wrpper">
      {console.log(style)}
        <section style={style} className="linear-progress"></section>
    </section>
  )
}

export default LinearProgress