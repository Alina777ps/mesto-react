import React from "react";

import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className='page'>
    <div className="page__container">
    <Header />
    <Main /> 
    <Footer />
    <PopupWithForm name='edit' title='Редактировать профиль' button='Сохранить'>
      <label className="popup__label">
        <input className="popup__input popup__input_type_name" type="text" placeholder="Имя" id="name" name="name" minLength={2} maxLength={40} required />
        <span className="name-error popup__input-error"></span>
      </label>
      <label className="popup__label">
        <input className="popup__input popup__input_type_about" type="text" placeholder="О себе" id="about" name="about" minLength={2} maxLength={200} required />
        <span className="about-error popup__input-error"></span>
      </label>
    </PopupWithForm>

    <PopupWithForm name='add' title='Новое место' button='Создать'>
      <label className="popup__label">
        <input className="popup__input popup__input_type_image-name" type="text" placeholder="Название" id="nameImage" name="name" minLength={2} maxLength={30} required />
        <span className="nameImage-error popup__input-error"></span>
      </label>
      <label className="popup__label">
        <input className="popup__input popup__input_type_link" type="url" placeholder="Ссылка на картинку" id="link" name="link" required />
        <span className="link-error popup__input-error"></span>
      </label> 
    </PopupWithForm>

    <PopupWithForm name='avatar' title='Обновить аватар' button='Сохранить'>
      <label className="popup__label">
        <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на картинку" id="avatar" name="avatar" required />
        <span className="avatar-error popup__input-error"></span>
      </label>  
    </PopupWithForm>

    <PopupWithForm name='confirmation' title='Вы уверены?' button='Да' />
      

    
    

  </div>
  </div>
  );
}

export default App;
