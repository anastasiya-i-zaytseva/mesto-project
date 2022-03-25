import {elementList, elementTemplate, imagePopup, image} from './constants.js';
import {toggleClass} from './utils.js';
import {openPopup} from './modal.js';

function likeCard(evt) {
    toggleClass(evt.target, 'element__button-like_active');
}

function removeCard(evt) {
    evt.target.closest('.element__info').remove();
}

function createCard(placeName, picLink) {
    const initCard = elementTemplate.querySelector('.element__info').cloneNode(true);
    const elementImage = initCard.querySelector('.element__image');
    const elementCity = initCard.querySelector('.element__city');
    elementImage.setAttribute('src', picLink);
    elementImage.setAttribute('alt', placeName);
    elementCity.textContent = placeName;
    initCard.querySelector('.element__button-like').addEventListener('click', likeCard)
    initCard.querySelector('.element__button-trash').addEventListener('click', removeCard)
    elementImage.addEventListener('click', function (evt) {
        image.src = evt.target.src;
        image.alt = evt.target.alt;
        document.querySelector('.popup__caption').textContent = evt.target.parentNode.querySelector('.element__city').textContent;
        openPopup(imagePopup);
    })
    return initCard
}

export function appendElement(placeName, picLink){
    const cardElement = createCard(placeName, picLink)
    elementList.prepend(cardElement);
}