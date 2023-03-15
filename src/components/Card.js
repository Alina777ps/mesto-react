import React from "react";

function Card(card) {

  function handleClick() {
    card.onCardClick(card);
  } 
    return (
       
          <article className="element" onClick={card.onClose}>
            <img className="element__mask-group" src={card.link} alt={card.name} onClick={handleClick} />
            <button className="element__trash" type="button" aria-label="Удалить"></button>
            <div className="element__rectangle">
              <h2 className="element__title">{card.name}</h2>
              <div className="element__container-like">
                <button className="element__like-button"></button>
                <span className="element__like-number">{card.likes.length}</span>
              </div>
            </div>
          </article>

    )
}

export default Card;