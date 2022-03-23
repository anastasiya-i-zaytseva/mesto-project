function createCard(placeName, picLink) {
    const initCard = elementTemplate.querySelector('.element__info').cloneNode(true);
    const elementImage = initCard.querySelector('.element__image');
    const elementCity = initCard.querySelector('.element__city');
    elementImage.setAttribute('src', picLink);
    elementImage.setAttribute('alt', placeName);
    elementCity.textContent = placeName;
    initCard.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__button-like_active');
    })
    initCard.querySelector('.element__button-trash').addEventListener('click', function (evt) {
        evt.target.closest('.element__info').remove();
    })
    elementImage.addEventListener('click', function (evt) {
        image.src = evt.target.src;
        image.alt = evt.target.alt;
        document.querySelector('.popup__caption').textContent = evt.target.parentNode.querySelector('.element__city').textContent;
        togglePopup(imagePopup);
    })
    return initCard
}

function appendElement(placeName, picLink){
    const cardElement = createCard(placeName, picLink)
    elementList.prepend(cardElement);
}

// 6 новых карточек
initialCards.forEach(function (element) {
    appendElement(element.name, element.link);
})

import {elementList, elementTemplate, imagePopup, image, initialCards} from './index.js';
import {togglePopup} from './utils.js';