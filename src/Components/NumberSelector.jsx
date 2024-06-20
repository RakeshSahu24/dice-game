import styled from "styled-components";

const NumberSelector = (props) => {
  const { selectedNumber, setSelectedNumber, error, setError } = props;
  const numbers = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {numbers.map((value, i) => (
          <Box
            key={i}
            onClick={() => numberSelectorHandler(value)}
            isSelectedNumber={value === selectedNumber}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select a number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
  }
  .error {
    color: red;
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
