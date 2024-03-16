import headerimg from '../../assets/SopranosLogo.png';
import  "./index.css";

// eslint-disable-next-line react/prop-types
function Header({high_score, current_score, handleClick}) {

    return(
        <div onClick={handleClick}id="header-container">
            <img id="title-img" src={headerimg}/>
            <div id="scoreboard">
                <p>Current Score: {current_score}</p>
                <p>High Score: {high_score}</p>
            </div>
        </div>
    )
}


export default Header;