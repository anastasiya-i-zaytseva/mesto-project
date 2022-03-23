export const profileOpenButton = document.querySelector('.profile__button-redact');
export const profilePopup = document.querySelector('.popup-profile');
export const nameInput = document.querySelector('#title');
export const jobInput = document.querySelector('#subtitle');
export const elementList = document.querySelector('.element');
export const elementTemplate = document.querySelector('.element-template').content;
export const addOpenButton = document.querySelector('.profile__button-edd');
export const addPlacePopup = document.querySelector('.popup-add-place');
export const nameNewPlace = document.querySelector('#title-place');
export const linkNewPlace = document.querySelector('#link');
export const addForm = document.querySelector('#popup-add-place-admin');
export const imagePopup = document.querySelector('#popup-image');
export const profileForm = document.querySelector('.popup__admin');
export const profileName = document.querySelector('.profile__title');
export const profileJob = document.querySelector('.profile__subtitle');
export const image = document.querySelector('.popup__image');
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Валидация форм
export const enableValidation = ({formSelector, ...rest}) => {
    const forms = document.querySelectorAll(formSelector);
    Array.from(forms).forEach(formElement => {
        setEventListers(formElement, rest)
    })
}

import '../styles/index.css';
import {setEventListers} from './validate.js';