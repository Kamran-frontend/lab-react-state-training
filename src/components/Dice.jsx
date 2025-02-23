import { useState, useEffect } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [currentDice, setCurrentDice] = useState(emptyDice);

  const rollDice = () => {
    setTimeout(() => {
      const randDice = Math.floor(Math.random() * 6 - 1);
      setCurrentDice(diceImages[randDice]);
    }, 1000);
  };

  return <img className="dice" src={currentDice} onClick={rollDice} />;
};

export default Dice;
