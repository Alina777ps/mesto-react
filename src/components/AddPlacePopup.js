import React from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {

    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
      setName(name);
      setLink(link);
    }, []); 

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name,
            link
        })
    }

    React.useEffect(() => {
      setName('');
      setLink('');
    }, [isOpen]);


    return (
        <PopupWithForm 
          name='add' 
          title='Новое место' 
          button='Создать' 
          isOpen={isOpen} 
          onClose={onClose}
          onSubmit={handleSubmit}
          buttonIsLoading="Создать..."
          isLoading={isLoading} >
          <label className="popup__label">
            <input className="popup__input popup__input_type_image-name" value={name} onChange={handleChangeName} type="text" placeholder="Название" id="nameImage" name="name" minLength={2} maxLength={30} required />
            <span className="nameImage-error popup__input-error"></span>
          </label>
          <label className="popup__label">
            <input className="popup__input popup__input_type_link" value={link} onChange={handleChangeLink} type="url" placeholder="Ссылка на картинку" id="link" name="link" required />
             <span className="link-error popup__input-error"></span>
          </label> 
        </PopupWithForm>

    )

}

export default AddPlacePopup;