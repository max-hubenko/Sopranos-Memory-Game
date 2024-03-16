import { useState } from "react"
import Header from "./components/Header"
import Popup from "./components/Popup"
import Sound from "./components/Sound"
import Cards from "./components/Cards";
import "./App.css"


function App() {
  const [isOpen, setisOpen] = useState(true);
  const [popupType, setpopupType] = useState('start');
  const [currentScore, setScore]= useState(0);
  const [highScore, setHighScore]= useState(0);
  const [tempScore, setTempScore] = useState(0);

  function closePopup(state) {
      if (state == "start_screen") {
        setisOpen(true);
        setpopupType('start');
      } else if (state == 'continue_game') {
        continueGame();
      } else if (state == 'restart_game') {
        setisOpen(!isOpen);
        setTempScore(0)
      }
  }

  function incrementScore() {
     setScore(currentScore + 1);
     setHighScore(Math.max(highScore, currentScore + 1));
  }

  function resetScore() {
    setScore(0);
  }

  function lose() {
    resetScore();
    setisOpen(true);
    setpopupType('lose');
  }

  function win() {
    setisOpen(true);
    setpopupType('win');
  }

  if (currentScore % 8 == 0 && currentScore != 0 && tempScore != currentScore) {
    setTempScore(currentScore);
    resetScore();
    win();
  }

  function continueGame() {
    setScore(tempScore)
    setisOpen(false); 
  }
  return (
    <>
      <Sound/>
      {isOpen ? <Popup type={popupType} handleClick={closePopup} /> : 
        <div className="main-container">
          <Header handleClick={() => {closePopup('start_screen') ; resetScore()}} class="header-comp" high_score={highScore} current_score={currentScore}/>
          <Cards key={tempScore} className="cards-comp" handleLose={lose} handleScore={incrementScore}/>
        </div>}
    </>)
}
export default App
