import React, { useState } from "react";
import PlayGameNavbar from "./PlayGameNavbar";
import Rules from "./Rules";

const PlayGame = () => {
  const [pickedNum, setPickedNum] = useState(null);
  const [isNumPicked, setIsNumPicked] = useState(true);

  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [diceNum, setDiceNum] = useState(1);

  const diceClicked = async () => {
    if (pickedNum === null) {
      setIsNumPicked(false)
      return;
    } 
    else{setIsNumPicked(true)}

    const finalDice = Math.floor(Math.random() * 6) + 1;
    console.log("Final Dice will be: " , finalDice);
    
    //Animation loop
    for (let i = 1; i <= 6; i++) {
      setTimeout(() => {
        setDiceNum(i);
      }, (i - 1) * 400);
    }

    setTimeout(() => {
      setDiceNum(finalDice);
    }, 2400);

    if (finalDice === pickedNum) {
      setTimeout(() => {
        setScore(prev => prev+finalDice);
      }, 2800);
    } else {
      setTimeout(() => {
        setScore(prev => prev - 1);
      }, 2800);
    }

  };



  return (
    <>
      <PlayGameNavbar
        pickedNum={pickedNum}
        setPickedNum={setPickedNum}
        score={score}
        isNumPicked={isNumPicked}
      />

      <div>
        <div className=" flex flex-col justify-center items-center">
          <div className="Dice w-56">
            <button
              onClick={() => {
                diceClicked();
              }}
            >
              <img src={`images/dice_${diceNum}.png`} alt={`Dice ${diceNum}`} />
            </button>
          </div>
          <span className="text-2xl font-bold m-2">Click on Dice to roll</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 gap-6">
          <button
            className="w-56 h-11  border-2 border-black rounded-lg"
            onClick={() => {
              setScore(0);
            }}
          >
            Reset Score
          </button>
          <button
            className=" w-56 h-11 bg-black text-white border-2 border-black rounded-lg"
            onClick={() => {
              setShowRules(!showRules);
            }}
          >
            {showRules ? "Hide Rules" : "Show Rules"}
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-1000  overflow-hidden ${
          showRules ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0"
        }`}
      >
        <Rules />
      </div>
    </>
  );
};
export default PlayGame;
