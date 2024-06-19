import styled from "styled-components";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/dices.png" alt="Dices image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}> Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-size: 96px;
      white-space: nowrap;
      text-transform: uppercase;
    }
  }
`;

const Button = styled.button`
  color: white;
  background-color: #000000;
  padding: 10px 18px;
  border: none;
  min-width: 220px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
