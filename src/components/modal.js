import {profilePopup, nameInput, jobInput, addPlacePopup, profileName, profileJob,
    profileImageOpen, profileImageForm} from './constants.js';
import {toggleClass} from './utils.js';
import {toggleButtonState} from "./utils";

let popupOpened;

// тумблер открыть-закрыть попап
function togglePopup(popup) {
    toggleClass(popup, 'popup_opened');
}

export function closePopup(popup) {
    document.removeEventListener('keydown', closePopupWithEsc);
    document.removeEventListener('click', closePopupWithClick);
    togglePopup(popup);
}

export function openPopup(popup) {
    popupOpened = popup;
    document.addEventListener('keydown', closePopupWithEsc);
    document.addEventListener('click', closePopupWithClick);
    togglePopup(popup);
}

// слушаем кнопку редактировать;
export function openProfilePopup(){
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(profilePopup);
}

//слушаем Escape
export function closePopupWithEsc(evt) {
    if(evt.key === 'Escape' && (popupOpened)) {
        closePopup(popupOpened);
    }
}

export function closePopupWithClick(evt) {
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
        closePopup(popupOpened);
    }
}

export function openPlacePopup(){
    const submitButton = document.querySelector('#popup-create-place');
    toggleButtonState(submitButton, false, 'popup__button_invalid');
    openPopup(addPlacePopup);
}

export function openProfileImageEdit() {
    openPopup(profileImageForm)
}