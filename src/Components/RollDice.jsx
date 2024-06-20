import styled from "styled-components";

const RollDice = (props) => {
  const { diceImage, setDiceImage } = props;

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceImage(`dice_${randomNumber}.png`);
  };
  return (
    <DiceContainer>
      <div className="dice">
        <img
          onClick={handleClick}
          src={`images/Dice/${diceImage}`}
          alt={`Dice with ${diceImage} number`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
