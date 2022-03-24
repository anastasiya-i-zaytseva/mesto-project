import {profilePopup, nameInput, jobInput, addPlacePopup, nameNewPlace, linkNewPlace, profileName, profileJob} from './constants.js';
import {appendElement} from './card.js';
import {toggleClass} from './utils.js';

let popupOpened;

// тумблер открыть-закрыть попап
function togglePopup(popup) {
    toggleClass(popup, 'popup_opened');
}

function closePopup(popup) {
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

export function openPlacePopup(evt){
    openPopup(addPlacePopup);
}

export function submitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(profilePopup);
}

export function submitPictureForm(evt) {
    evt.preventDefault();
    appendElement(nameNewPlace.value, linkNewPlace.value);
    closePopup(addPlacePopup);
    nameNewPlace.value = "";
    linkNewPlace.value = "";
}