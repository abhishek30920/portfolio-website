import React, {useState, useEffect} from 'react';
import DiceCurrent from "./DiceCurrent";
import Players from "./Players";
import "./styles/Scarne.css"

//Parent

function Scarne() {
  const [playerOneTotal, setPlayerOneTotal] = useState(0);
  const [playerTwoTotal, setPlayerTwoTotal] = useState(0);

  useEffect(()=>{
      if(playerOneTotal> 50){
        window.alert("Player 1 wins");
        setScoreZero();
      } else if(playerTwoTotal > 50) {
        window.alert("Player 2 wins");
        setScoreZero();
      }
  },[playerOneTotal, playerTwoTotal])

  const setScoreZero = () =>{
    setPlayerOneTotal(0);
    setPlayerTwoTotal(0);
  }

  return (
    <section id="scrane-wrapper">
      <h1>Scarne's Dice Game</h1>
      <DiceCurrent playerOneTotal={playerOneTotal} playerTwoTotal={playerTwoTotal} setPlayerOneTotal={setPlayerOneTotal} setPlayerTwoTotal={setPlayerTwoTotal}/>
      <Players playerOneTotal={playerOneTotal} playerTwoTotal={playerTwoTotal}/>
    </section>
  )
}

export default Scarne