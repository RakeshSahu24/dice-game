import styled from "styled-components";

const NumberSelector = (props) => {
  const { selectedNumber, setSelectedNumber } = props;
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
      <div className="flex">
        {numbers.map((value, i) => (
          <Box
            key={i}
            onClick={() => setSelectedNumber(value)}
            isSelectedNumber={value === selectedNumber}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 30px;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  display: grid;
  width: 72px;
  height: 72px;
  border: 1px solid black;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelectedNumber ? "black" : "white")};
  color: ${(props) => (props.isSelectedNumber ? "white" : "black")};
`;
