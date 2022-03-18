const profileOpenButton = document.querySelector('.profile__button-redact');
const profilePopup = document.querySelector('.popup-profile');
const nameInput = document.querySelector('#title');
const jobInput = document.querySelector('#subtitle');
const elementList = document.querySelector('.element');
const elementTemplate = document.querySelector('.element-template').content;
const addOpenButton = document.querySelector('.profile__button-edd');
const addPlacePopup = document.querySelector('.popup-add-place');
const nameNewPlace = document.querySelector('#title-place');
const linkNewPlace = document.querySelector('#link');
const addForm = document.querySelector('#popup-add-place-admin');
const imagePopup = document.querySelector('#popup-image');
const profileForm = document.querySelector('.popup__admin');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const image = document.querySelector('.popup__image');
const initialCards = [
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

function toggleClass(object, styleName) {
    object.classList.toggle(styleName);
}

// тумблер открыть-закрыть попап
function togglePopup(popup) {
    toggleClass(popup, 'popup_opened');
}

// const elementCardImg = elementCard.querySelector('popup_image');
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

// 6 новых карточек
initialCards.forEach(function (element) {
    appendElement(element.name, element.link);
})

// слушаем кнопку редактировать;
profileOpenButton.addEventListener('click', function(){
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    togglePopup(profilePopup);
});

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

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

addForm.addEventListener('submit', handleAddFormSubmit);

//Валидация форм
const showError = (errorElement, inputElement, inputErrorClass) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(inputErrorClass)
}

const hideError = (errorElement, inputElement, inputErrorClass) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.remove(inputErrorClass)
}

const checkInputValidity = (formElement, inputElement, config) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    if(isInputNotValid) {
        showError(errorElement, inputElement, config);
    } else {
        hideError(errorElement, inputElement, config);
    }
}

const toggleButtonState = (button, isActive, inactiveButtonClass) => {
    if(isActive){
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(inactiveButtonClass);
        button.disabled = 'disabled';
    }
}


const setEventListers = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass }) => {
    const inputsList = formElement.querySelectorAll(inputSelector);
    const submitButton = formElement.querySelector(submitButtonSelector);
    Array.from(inputsList).forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            const isFormValid = formElement.checkValidity();
            checkInputValidity(formElement, inputElement, inputErrorClass)
            toggleButtonState(submitButton, isFormValid, inactiveButtonClass)
        })
    })
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })
}

const enableValidation = ({formSelector, ...rest}) => {
    const forms = document.querySelectorAll(formSelector);
    Array.from(forms).forEach(formElement => {
        setEventListers(formElement, rest)
    })
}

const validationConfig = {
    formSelector: '.popup__admin',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__item_state_invalid',
}

const {inputSelector, ...rest} = validationConfig;

enableValidation(validationConfig);