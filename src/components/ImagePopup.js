import React from "react";

import '../index.css';

function ImagePopup() {
    return (
        <div className="popup popup-image">
        <figure className="popup__figure">
          <button className="popup__close-icon" type="button" aria-label="Закрыть"></button>
          <img className="popup__mask-group" src="#" alt="Фотографии городов" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
    </div>

    )
}