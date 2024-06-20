import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";
import { useState } from "react";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGameStart = () => setIsGameStarted(!isGameStarted);
  return (
    <div className="App">
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameStart} />}
    </div>
  );
};
export default App;
