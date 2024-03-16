import './index.css'

// eslint-disable-next-line react/prop-types
function Popup({type, handleClick}) {
  
    return (
      <div className="popup-div">
        <div className="inside-popup-div">
          {type == 'start' ? <>
            <p className='Title'> Sopranos Memory Game</p>
            <p className='rule-text'>Rules: Each time you click a card they will be shuffled and you must
                click a new card each time or you lose. Good Luck! </p>
          <button id="start-button" onClick={() => handleClick("restart_game")}>Start Game</button> </>
          : type == 'lose' ?
          <>
            <iframe src="https://giphy.com/embed/ZgULv0ulcWJ1PEe8PX" width="480" height="270"></iframe>
            <p className='Title'> You Lose!</p>
            <div id="buttons">
              <button id="start-button" onClick={() => handleClick("restart_game")}>Restart Game</button>
              <button id="start-button" onClick={() => handleClick("start_screen")}>Back to Start</button> 
            </div> 
          </>
          : <>
            <iframe src="https://giphy.com/embed/6n0eZugCKg9SE" width="480" height="333"></iframe>
            <p className='Title' id="win"> You Win!</p>
            <div id="buttons">
              <button id="start-button" onClick={() => handleClick("continue_game")}>Continue Game</button>
              <button id="start-button" onClick={() => handleClick("start_screen")}>Back to Start</button> 
            </div> 
          </> }
        </div>
      </div>
    );
  }

export default Popup;