import { useState } from "react";
import { cardsArray } from "./cards";
import "./index.css"
import ducks from "../../assets/sopranosDucks.jpg"

function getRandomElements(arr, count) {
    let shuffled = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffled.slice(0, count);
}


// eslint-disable-next-line react/prop-types
function Cards({handleLose, handleScore}) {
    let [cardArray, setcardArray] = useState(getRandomElements(cardsArray,8));
    let [pickedCards, setpickedCards] = useState([]);

    

    function shuffle(key) {
        if (pickedCards.includes(key)) {
            handleLose();
        } else {
            setpickedCards(prevpickedCards => [...prevpickedCards, key]);
            setcardArray(prevCardArray => getRandomElements(prevCardArray, 8));
            handleScore();
        }
    }

    return(
        <div className="cards-div">
            {cardArray.map((card) => 
                <div onClick={() => shuffle(card.name)} key={card.name} className="card"> 
                    <img className="card-img" src={card.src}></img>
                    <p className="names">{card.name}</p> 
                </div>
            )}
        </div>
    )
}

export default Cards;