import {elementList, elementTemplate, imagePopup, image} from './constants.js';
import {toggleClass} from './utils.js';
import {openPopup} from './modal.js';
import {getCardsFromServer, removeCardFromServer} from './api';

function likeCard(evt) {
    toggleClass(evt.target, 'element__button-like_active');
}

function createCard(placeName, picLink, dataId) {
    console.log(dataId)
    const initCard = elementTemplate.querySelector('.element__info').cloneNode(true);
    const elementImage = initCard.querySelector('.element__image');
    const elementCity = initCard.querySelector('.element__city');
    elementImage.setAttribute('src', picLink);
    elementImage.setAttribute('alt', placeName);
    elementCity.textContent = placeName;
    initCard.querySelector('.element__button-like').addEventListener('click', likeCard)
    initCard.querySelector('.element__button-trash').addEventListener('click', (evt) => {
        removeCardFromServer(dataId)
        .then(() => {
            evt.target.closest('.element__info').remove();
        })
        .catch(err => console.log(err));
    })
    elementImage.addEventListener('click', function (evt) {
        image.src = evt.target.src;
        image.alt = evt.target.alt;
        document.querySelector('.popup__caption').textContent = evt.target.parentNode.querySelector('.element__city').textContent;
        openPopup(imagePopup);
    })
    return initCard
}

export function appendCard(element){
    console.log(element)
    const placeName = element.name;
    const picLink = element.link;
    const picId = element._id;
    const cardElement = createCard(placeName, picLink, picId)
    elementList.prepend(cardElement);
}