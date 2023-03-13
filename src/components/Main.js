import React from "react";
import '../index.css';
import App from './App';

function Main() {
  
  function handleEditProfileClick() {
    document.querySelector('.popup-edit-profile').classList.add('popup_opened')}

  function handleAddPlaceClick() {
    document.querySelector('.popup-add-profile').classList.add('popup_opened')}

    function handleEditAvatarClick() {
      document.querySelector('.popup-avatar-edit').classList.add('popup_opened')}



    return (
        <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__container-avatar">
            <img className="profile__avatar" src="<%=require('./images/Avatar.jpg')%>" alt="Аватар" />
            <button className="profile__avatar-edit" type="button" aria-label="Редактировать" onClick={handleEditAvatarClick}>
              <img className="profile__avatar-pen" src="<%=require('./images/Vector.svg')%>" alt="Ручка" />
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
            <p className="profile__subtitle">Исследователь океана</p> 
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements"></section>

        <template id="template">
          <article className="element">
            <img className="element__mask-group" src="#" alt="Фотографии городов" />
            <button className="element__trash" type="button" aria-label="Удалить"></button>
            <div className="element__rectangle">
              <h2 className="element__title"></h2>
              <div className="element__container-like">
                <button className="element__like-button"></button>
                <span className="element__like-number">0</span>
              </div>
            </div>
          </article>
        </template>

    </main> 
    );
  }
  
  export default Main;