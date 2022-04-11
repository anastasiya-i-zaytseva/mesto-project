import '../styles/index.css';
import {validationConfig, enableValidation} from './validate.js';
import {openProfilePopup, openPlacePopup, closePopup, openProfileImageEdit} from './modal.js';
import {profileOpenButton, addOpenButton} from './constants.js';
import {
    addForm, addPlacePopup,
    jobInput, linkNewPlace,
    nameInput, nameNewPlace,
    profileForm, profileJob,
    profileName, profilePopup,
    profileImageOpen, linkProfileImage,
    profileAvatar, btnSubmitAvatar,
    profileImageForm} from "./constants";
import {appendCard} from "./card";
import {getCardsFromServer, updateProfileInfo, addNewCard} from"./api";

//const initCards2 = getCardsFromServer();

enableValidation(validationConfig);

profileOpenButton.addEventListener('click', openProfilePopup);

//открытие и закрытие добавление новой карточки
addOpenButton.addEventListener('click', openPlacePopup);

//кнопка Сохранить
profileForm.addEventListener('submit', submitProfile);

addForm.addEventListener('submit', submitPictureForm);

profileImageOpen.addEventListener('click', openProfileImageEdit);

btnSubmitAvatar.addEventListener('click', submitProfileImageEdit);

// новые карточки
getCardsFromServer().then((initialCards => {
    initialCards.forEach(function (element) {
        appendCard(element);
    })
    //onsole.log(initCards2)
}))

function submitProfile(evt) {
    evt.preventDefault();
    updateProfileInfo().then({

    })
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(profilePopup);
}

function submitPictureForm(evt) {
    evt.preventDefault();
    addNewCard(data).then({

    })

    //appendElement(nameNewPlace.value, linkNewPlace.value);
    //closePopup(addPlacePopup);
    //nameNewPlace.value = "";
    //linkNewPlace.value = "";
}

function submitProfileImageEdit(evt) {
    evt.preventDefault();
    profileAvatar.src = linkProfileImage.value;
    profileAvatar.alt = "Здесь должна быть картинка с аватаркой";
    closePopup(profileImageForm);
    linkProfileImage.value = "";
}
