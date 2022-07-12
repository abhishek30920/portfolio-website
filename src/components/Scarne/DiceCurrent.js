import React,{useState, useEffect} from 'react'
import dice1 from "../../resource/dic1.PNG";
import dice2 from "../../resource/dic2.PNG";
import dice3 from "../../resource/dic3.PNG";
import dice4 from "../../resource/dic4.PNG";
import dice5 from "../../resource/dic5.PNG";
import dice6 from "../../resource/dic6.PNG";

function DiceCurrent({setPlayerOneTotal, setPlayerTwoTotal, playerTwoTotal, playerOneTotal}) {
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentRoll, setCurrentRoll] = useState(0);

    const handleRollClick  = () => {
      let numb = (Math.ceil(Math.random()*10)%6)+1;
      setCurrentRoll(numb);
      if(numb!==1){
        setCurrentScore(currentScore+numb);
      }
      else {
        setCurrentPlayer(!currentPlayer);
        setCurrentScore(0);
      }
    }

    const handlePassClick = () =>{
      if(currentPlayer) {
        setPlayerTwoTotal(playerTwoTotal+currentScore);
      } else{
        setPlayerOneTotal(playerOneTotal+currentScore);
      }

      if(playerOneTotal+currentScore > 50 || playerTwoTotal+currentScore > 50){
        setCurrentPlayer(0);
      } else
      setCurrentPlayer(!currentPlayer);
      setCurrentScore(0);
      setCurrentRoll(0);
    }

    const getDiceImage = () =>{
      let diceObj = {
        1:dice1,
        2:dice2,
        3:dice3,
        4:dice4,
        5:dice5,
        6:dice6
      }
      return  <img src={diceObj[currentRoll]}/>
    }

  return (
    <section id="dice-current-wrapper">
        <h1>Player {currentPlayer+1} turn:</h1>
        <h1>Current Score: {currentScore}</h1>
        {getDiceImage()}
        <section>
        <div onClick={handleRollClick}>Roll</div>
        <div onClick={handlePassClick}>Pass</div>
        </section>
    </section>
  )
}

export default DiceCurrent