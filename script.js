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
// const likeButton = document.querySelector('.element__button-like');

// слушаем кнопку редактировать;
popupOpenButton.addEventListener('click', function(){
    nameInput.value = document.querySelector('.profile__title').textContent;
    jobInput.value = document.querySelector('.profile__subtitle').textContent;
    togglePopup(popupWindow);
});
// слушаем кнопку крэстик в попапе
popupCloseButton.addEventListener('click', function() {
    togglePopup(popupWindow);
});

// тумблер открыть-закрыть попап
function togglePopup(popup) {
    //popup.classList.toggle('popup_opened');
    elementClassToggle(popup, 'popup_opened');
}

//кнопка Сохранить
const formElement = document.querySelector('.popup__admin');

function formSubmitHandler (evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent =  nameInput.value;
    document.querySelector('.profile__subtitle').textContent =  jobInput.value;
    togglePopup(popupWindow);
}
formElement.addEventListener('submit', formSubmitHandler);

// 6 новых карточек
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
initialCards.forEach(function (element) {
    appendElementToElementList(element.name, element.link);
})

function appendElementToElementList(placeName, picLink){
    const initCard = elementTemplate.cloneNode(true);

    initCard.querySelector('.element__image').src = picLink;
    initCard.querySelector('.element__image').alt = placeName;
    initCard.querySelector('.element__city').textContent = placeName;

    elementList.append(initCard);
}

//открытие и закрытие добавление новой карточки

popupOpenButtonAdd.addEventListener('click', function(){
    togglePopup(popupWindowAdd);
});

// слушаем кнопку крэстик в попапе
popupCloseButtonAdd.addEventListener('click', function() {
    togglePopup(popupWindowAdd);
});

function formSubmitHandlerAdd (evt) {
    evt.preventDefault();
    appendElementToElementList(nameNewPlace.value, linkNewPlace.value);
    togglePopup(popupWindowAdd);
}
formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

//корзина
elementList.onclick = function (event) {
    // if (event.target.className !== 'element__button-trash') return;
    if (event.target.classList.contains('element__button-trash')) {
        //console.log('Да. Можно удалять');
        let info = event.target.closest('.element__info');
        info.remove();
        return;
    }
    if (event.target.classList.contains('element__button-like')) {
        let likeButton = event.target.closest('.element__button-like');
        //console.log('Можем сделать лайк! или убрать!');
        //likeButton.classList.toggle('element__button-like_active');
        elementClassToggle(likeButton, 'element__button-like_active');
    }
}

function elementClassToggle(element, styleName) {
    element.classList.toggle(styleName);
}
// //увеличить картинку
// const popupWindowImage = document.querySelector('#popup__image');
// const popupOpenImage = document.querySelector('.element__image');
// //открыть изображение
// popupOpenImage.addEventListener('click', function () {
//     togglePopup(popupWindowImage);
// })
// //закрыть изображение с картинкой
//
// // popupCloseButtonImage.addEventListener('click', function() {
// //     togglePopup(popupWindowImage);
// // });
