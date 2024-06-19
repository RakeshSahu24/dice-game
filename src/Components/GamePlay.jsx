import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";

const GamePlay = () => {
  return (
    <main>
      <TotalScore />
      <NumberSelector />
    </main>
  );
};
// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   .box {
//     width: 72px;
//     height: 72px;
//     background: #ffffff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 1px solid #000;
//     box-sizing: border-box;
//   }
// `;
export default GamePlay;
