import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "./styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, newScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected a number");
      return;
    }

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);
    if (selectedNumber === randomNumber) {
      newScore(score + randomNumber);
    } else {
      newScore(score - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    newScore(0);
    setSelectedNumber(undefined);
    setError("");
  };

  const handleShowRules = () => {
    setShowRules(!showRules);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={handleShowRules}>
          {!showRules ? "Show" : "Hide"} rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export default GamePlay;
