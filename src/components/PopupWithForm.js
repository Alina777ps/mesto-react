import React from "react";
import '../index.css';

function PopupWithForm(props) {

    return (
      <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.onClose}>
        <div className="popup__container" onClick={e => e.stopPropagation()} >
          <button className="popup__close-icon" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form"  name={`${props.name}`} noValidate onSubmit={props.onSubmit}>
            <fieldset className="popup__fieldset">
              {props.children}
            </fieldset>
            <button className="popup__button" type="submit">{props.isLoading ? props.buttonIsLoading : props.button}</button>
          </form>
        </div>
      </div>
    )
}

export default PopupWithForm;