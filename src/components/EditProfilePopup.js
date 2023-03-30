import React from "react";
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {

  const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }, [currentUser, isOpen]); 

    function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
      e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
        name,
        about: description,
      });
    }
    
    return (
        <PopupWithForm 
          name='edit' 
          title='Редактировать профиль' 
          button='Сохранить'
          buttonIsLoading='Сохранить...'
          isOpen={isOpen} 
          onClose={onClose} 
          onSubmit={handleSubmit}
          isLoading={isLoading}>
          <label className="popup__label">
            <input className="popup__input popup__input_type_name" type="text" placeholder="Имя" id="name" name="name" minLength={2} maxLength={40} required value={name} onChange={handleChangeName} />
            <span className="name-error popup__input-error"></span>
          </label>
          <label className="popup__label">
            <input className="popup__input popup__input_type_about" type="text" placeholder="О себе" id="about" name="about" minLength={2} maxLength={200} required value={description} onChange={handleChangeDescription}/>
            <span className="about-error popup__input-error"></span>
          </label>
        </PopupWithForm>
    )

}

export default EditProfilePopup;