import React from "react";

import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmationPopup from './ConfirmationPopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';

import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  
  const [selectedCard, setSelectedCard] = React.useState({});

  const [deleteCard, setDeleteCard] = React.useState({});

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({ name: "", about: "", avatar: "" });

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((error) => console.log(`Произошла ошибка: ${error}`))
  }, [])

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch((error) => console.log(`Произошла ошибка: ${error}`));
  }, [])

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setSelectedCard({});
    setDeleteCard({})
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      api
        .addLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
         })
        .catch((error) => console.log(`Произошла ошибка: ${error}`))
        }
    else {
      api
        .removeLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((error) => console.log(`Произошла ошибка: ${error}`))
    }
  } 

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cadrs) => cadrs.filter((item) => item._id !== card._id))
      })
      .catch((error) => console.log(`Произошла ошибка: ${error}`))
      closeAllPopups()
  }

  function handleUpdateUser(currentUser) {
    api
      .setUserInfo(currentUser)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => console.log(`Произошла ошибка: ${error}`));
      closeAllPopups()
  }

  function handleUpdateAvatar(currentUser) {
    api
      .setUserAvatar(currentUser)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => console.log(`Произошла ошибка: ${error}`));
      closeAllPopups()
  }

  function handleAddPlaceSubmit(card) {
    api
      .addNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]); 
      })
      .catch((error) => console.log(`Произошла ошибка: ${error}`))
      closeAllPopups()
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      <div className="page__container">
        <Header />
        <Main
          cards={cards}
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
          onCardLike={handleCardLike}
          onCardDelete={setDeleteCard}
          onConfirmationPopup={setIsConfirmationPopupOpen}
        /> 
        <Footer />
        
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser} />

        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit} />

        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}/>

        <ConfirmationPopup 
          onClose={closeAllPopups}
          isOpen={isConfirmationPopupOpen}
          onCardDelete={handleCardDelete}
          card={deleteCard} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
