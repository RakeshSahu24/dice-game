import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  return (
    <div>
      {numbers.map((value, i) => (
        <Box
          key={i}
          onClick={() => setSelectedNumber(value)}
          style={{ backgroundColor: selectedNumber === value ? "red" : "" }}
        >
          {value}
        </Box>
      ))}
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
  display: grid;
  width: 72px;
  height: 72px;
  border: 1px solid black;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;
