import React from "react";
import '../index.css';
import vector from '../images/Vector.svg';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        return (
          setUserName(data.name),
          setUserDescription(data.about),
          setUserAvatar(data.avatar)
        )
        })
      .catch((error) => console.log(`Произошла ошибка: ${error}`))

    }, [])

    React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(
          data.map((card) => ({
            name: card.name,
            link: card.link,
            likes: card.likes,
            cardId: card._id,
        }))
        )
      })
      .catch((error) => console.log(`Произошла ошибка: ${error}`));
  }, [])

    return (
      <main className="content">
        <section className="profile">
          <div className="profile__container">
            <div className="profile__container-avatar">
              <img className="profile__avatar" alt="Аватар" src={userAvatar} />
              <button 
                className="profile__avatar-edit" 
                type="button" aria-label="Редактировать" 
                onClick={() => {props.onEditAvatar(true)}}>
                <img className="profile__avatar-pen" src={vector} alt="Ручка" />
              </button>
            </div>
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button 
                className="profile__edit-button" 
                type="button" 
                aria-label="Редактировать" 
                onClick={() => {props.onEditProfile(true)}}>
              </button>
              <p className="profile__subtitle">{userDescription}</p> 
            </div>
          </div>
          <button 
            className="profile__add-button" 
            type="button" aria-label="Добавить" 
            onClick={() => {props.onAddPlace(true)}}>
          </button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card 
              key={card.cardId}
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={props.onCardClick} />))}
          </section>
      </main> 
    );
  }
  
  export default Main;