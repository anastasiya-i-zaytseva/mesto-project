let popupOpened;

import { profileForm,
    profilePopup, nameInput, jobInput,
    addPlacePopup, nameNewPlace, linkNewPlace,
    addForm, profileName, profileJob} from './index.js';

import {appendElement} from './card.js';
import {toggleClass} from './utils.js';


// тумблер открыть-закрыть попап
function togglePopup(popup) {
    toggleClass(popup, 'popup_opened');
}

function closePopup(popup) {
    document.removeListener('keydown');
    document.removeListener('click');
    togglePopup(popup);
    //popup.classList.remove('popup_opened');
}

function openPopup(popup) {
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

//кнопка Сохранить
profileForm.addEventListener('submit', submitProfile);

export function openPlacePopup(evt){
    openPopup(addPlacePopup);
}

function submitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(profilePopup);
}

function submitPictureForm(evt) {
    evt.preventDefault();
    appendElement(nameNewPlace.value, linkNewPlace.value);
    closePopup(addPlacePopup);
    nameNewPlace.value = "";
    linkNewPlace.value = "";
}

addForm.addEventListener('submit', submitPictureForm);




