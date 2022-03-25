import '../styles/index.css';
import {validationConfig, enableValidation} from './validate.js';
import {openProfilePopup, openPlacePopup, closePopup} from './modal.js';
import {profileOpenButton, addOpenButton} from './constants.js';
import {
    addForm, addPlacePopup,
    initialCards,
    jobInput, linkNewPlace,
    nameInput, nameNewPlace,
    profileForm,
    profileJob,
    profileName,
    profilePopup
} from "./constants";
import {appendElement} from "./card";

enableValidation(validationConfig);

profileOpenButton.addEventListener('click', openProfilePopup);

//открытие и закрытие добавление новой карточки
addOpenButton.addEventListener('click', openPlacePopup);

//кнопка Сохранить
profileForm.addEventListener('submit', submitProfile);

addForm.addEventListener('submit', submitPictureForm);

// 6 новых карточек
initialCards.forEach(function (element) {
    appendElement(element.name, element.link);
})

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