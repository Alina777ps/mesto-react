import React from "react";
import '../index.css';

function PopupWithForm(props) {
    return (
        <div className={`popup popup-${props.name}`}  >
      <div className="popup__container">
        <button className="popup__close-icon" type="button" aria-label="Закрыть"></button>
        <h2 className="popup__title">${props.title}</h2>
        <form className="popup__form" name="${props.name}" noValidate>
          <fieldset className="popup__fieldset">
            {props.children}
          </fieldset>
          <button className="popup__button" type="submit">${props.button}</button>
        </form>
      </div>
    </div>
    )


}