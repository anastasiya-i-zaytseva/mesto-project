const popupOpenButton = document.querySelector('.profile__button-redact');
const popupCloseButton = document.querySelector('.popup__button-close');
const popupWindow = document.querySelector('.popup');
const nameInput = document.querySelector('#title');
const jobInput = document.querySelector('#subtitle');
const elementList = document.querySelector('.element');
const elementTemplate = document.querySelector('.element-template').content;
const popupOpenButtonAdd = document.querySelector('.profile__button-edd');
const popupCloseButtonAdd = document.querySelector('#popup-add-place-close');
const popupWindowAdd = document.querySelector('#popup-add-place');
const nameNewPlace = document.querySelector('#new-place-name');
const linkNewPlace = document.querySelector('#new-place-href');
const formElementAdd = document.querySelector('#popup-add-place-admin');
const popupCloseButtonImage = document.querySelector('#popup__image-close');
const popupWindowImage = document.querySelector('#popup-image');
const formElement = document.querySelector('.popup__admin');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
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

function objectClassToggle(element, styleName) {
    element.classList.toggle(styleName);
}

// тумблер открыть-закрыть попап
function togglePopup(popup) {
    objectClassToggle(popup, 'popup_opened');
}

function appendElementToElementList(placeName, picLink){
    const initCard = elementTemplate.cloneNode(true);

    initCard.querySelector('.element__image').src = picLink;
    initCard.querySelector('.element__image').alt = placeName;
    initCard.querySelector('.element__city').textContent = placeName;

    elementList.prepend(initCard);
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    togglePopup(popupWindow);
}

function formSubmitHandlerAdd (evt) {
    evt.preventDefault();
    appendElementToElementList(nameNewPlace.value, linkNewPlace.value);
    togglePopup(popupWindowAdd);
    nameNewPlace.value = "";
    linkNewPlace.value = "";
}

// 6 новых карточек
initialCards.forEach(function (element) {
    appendElementToElementList(element.name, element.link);
})

// слушаем кнопку редактировать;
popupOpenButton.addEventListener('click', function(){
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    togglePopup(popupWindow);
});

// слушаем кнопку крэстик в попапе
popupCloseButton.addEventListener('click', function() {
    togglePopup(popupWindow);
});

//кнопка Сохранить
formElement.addEventListener('submit', formSubmitHandler);

//открытие и закрытие добавление новой карточки
popupOpenButtonAdd.addEventListener('click', function(){
    togglePopup(popupWindowAdd);
});

// слушаем кнопку крэстик в попапе
popupCloseButtonAdd.addEventListener('click', function() {
    togglePopup(popupWindowAdd);
});

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

//корзина
elementList.onclick = function (event) {
    if (event.target.classList.contains('element__button-trash')) {
        const info = event.target.closest('.element__info');
        info.remove();
        return;
    }
    if (event.target.classList.contains('element__button-like')) {
        const likeButton = event.target.closest('.element__button-like');
        objectClassToggle(likeButton, 'element__button-like_active');
        return;
    }
    if (event.target.classList.contains('element__image')) {
        document.querySelector('.popup__image').src = event.target.src;
        document.querySelector('.popup__caption').textContent = event.target.parentNode.querySelector('.element__city').textContent;
        togglePopup(popupWindowImage);
    }
}

//закрыть изображение с картинкой
popupCloseButtonImage.addEventListener('click', function() {
    togglePopup(popupWindowImage);
});