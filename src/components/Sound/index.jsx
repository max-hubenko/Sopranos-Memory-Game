import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import themeSound from '../../assets/SopranosTheme.mp3'
import { useState } from "react";
import "./index.css";


function Sound() {
    const [volToggle, setVolToggle] = useState(false);

    function handleClick() {
        setVolToggle(!volToggle);
    }


    return (
        <>
        {volToggle ?
            <>
                <FaVolumeUp onClick={handleClick}className='volume-button'/>
                
                <audio src={themeSound} autoPlay loop/>
            </>
            : 
            <FaVolumeMute onClick={handleClick}className='volume-button'/>
        }
        </>
    

    );
}

export default Sound;