// слушаем кнопку редактировать;
profileOpenButton.addEventListener('click', function(){
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    togglePopup(profilePopup);
});

//слушаем Escape
function closePopupWithEsc(evt) {
    const popupOpened = document.querySelector('.popup_opened');
    if(evt.key === 'Escape' && (popupOpened)) {
        closePopup(popupOpened);
    }
}

//слушаем клик на крестик и вне попапа
document.addEventListener('keydown', closePopupWithEsc);

document.addEventListener('click', function (evt) {
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
        closePopup(document.querySelector('.popup_opened'));
    }
})

//кнопка Сохранить
profileForm.addEventListener('submit', handleProfileFormSubmit);

//открытие и закрытие добавление новой карточки
addOpenButton.addEventListener('click', function(){
    togglePopup(addPlacePopup);
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup(profilePopup);
}

function handleAddFormSubmit(evt) {
    evt.preventDefault();
    appendElement(nameNewPlace.value, linkNewPlace.value);
    togglePopup(addPlacePopup);
    nameNewPlace.value = "";
    linkNewPlace.value = "";
}

addForm.addEventListener('submit', handleAddFormSubmit);

import {profileOpenButton, addOpenButton, profileForm,
    profilePopup, nameInput, jobInput,
    addPlacePopup, nameNewPlace, linkNewPlace,
    addForm, profileName, profileJob} from './index.js';
import {togglePopup, closePopup} from './utils';