import '../styles/index.css';
import {setEventListers, validationConfig} from './validate.js';
import {openProfilePopup, openPlacePopup, submitProfile, submitPictureForm} from './modal.js';
import {profileOpenButton, addOpenButton} from './constants.js';
import {addForm, profileForm} from "./constants";

//Валидация форм
export const enableValidation = ({formSelector, ...rest}) => {
    const forms = document.querySelectorAll(formSelector);
    Array.from(forms).forEach(formElement => {
        setEventListers(formElement, rest)
    })
}

enableValidation(validationConfig);

profileOpenButton.addEventListener('click', openProfilePopup);

//открытие и закрытие добавление новой карточки
addOpenButton.addEventListener('click', openPlacePopup);

//кнопка Сохранить
profileForm.addEventListener('submit', submitProfile);

addForm.addEventListener('submit', submitPictureForm);