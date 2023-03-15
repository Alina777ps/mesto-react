import React from "react";

import '../index.css';

function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup popup-image ${card.link ? 'popup_opened' : ''}`} onClick={onClose}>
          <figure className="popup__figure" onClick={e => e.stopPropagation()}>
            <button className="popup__close-icon" type="button" aria-label="Закрыть" onClick={onClose}></button>
            <img className="popup__mask-group" src={card.link} alt={card.name} />
            <figcaption className="popup__caption">{card.name}</figcaption>
          </figure>
        </div>
    )
}

export default ImagePopup;