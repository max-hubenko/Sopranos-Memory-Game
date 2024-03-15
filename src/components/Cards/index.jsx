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

function Cards() {
    let [cardArray, setcardArray] = useState(getRandomElements(cardsArray,8));


    function shuffle() {
        setcardArray(prevCardArray => getRandomElements(prevCardArray, 8));
    }

    return(
        <div className="cards-div">
            {cardArray.map((card) => 
                <div onClick={shuffle} key={card.name} className="card"> 
                    <img className="card-img" src={ducks}></img>
                    <p className="names">{card.name}</p> 
                </div>
            )}
        </div>
    )
}

export default Cards;