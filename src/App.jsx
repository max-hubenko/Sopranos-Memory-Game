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
  

  function closePopup(restart) {
      if (restart) {
        setpopupType('start');
      } else {
        setisOpen(!isOpen);
      }
  }

  function incrementScore() {
     setScore(prevScore => prevScore + 1);
     setHighScore(Math.max(highScore, currentScore + 1));
  }
  function resetScore() {
    setScore(0);
  }

  function lose() {
    setisOpen(true);
    resetScore();
    setpopupType('lose');
  }

  function win() {
    setisOpen(true);
    setpopupType('win');
  }

  return (
    <>
      <Sound/>
      {isOpen ? <Popup type={popupType} handleClick={closePopup} /> : 
        <div className="main-container">
          <Header class="header-comp" high_score={highScore}current_score={currentScore}/>
          <Cards className="cards-comp"/>
          {/* <button onClick={lose}>Lose</button>
          <button onClick={win}>Win</button>
          <button onClick={incrementScore}>inc score</button> */}
        </div>}
    </>)
}
export default App
