const popupOpenButton = document.querySelector('.profile__button-redact');
const popupCloseButton = document.querySelector('.popup__button-close');
const popupWindow = document.querySelector('.popup');
const nameInput = document.querySelector('#title');
const jobInput = document.querySelector('#subtitle');

// слушаем кнопку редактировать;
popupOpenButton.addEventListener('click', function(){
    nameInput.value = document.querySelector('.profile__title').textContent;
    jobInput.value = document.querySelector('.profile__subtitle').textContent;
    togglePopup();
});
// слушаем кнопку крэстик в попапе
popupCloseButton.addEventListener('click', togglePopup);

// тумблер открыть-закрыть
function togglePopup() {
    popupWindow.classList.toggle('popup_opened');
}

//кнопка Сохранить
const formElement = document.querySelector('.popup__admin');

function formSubmitHandler (evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent =  nameInput.value;
    document.querySelector('.profile__subtitle').textContent =  jobInput.value;
    togglePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

// 6 новых карточек
const elementList = document.querySelector('.element');
const elementTemplate = document.querySelector('.element-template').content;

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
    const initCard = elementTemplate.cloneNode(true);

    initCard.querySelector('.element__image').src = element.link;
    initCard.querySelector('.element__image').alt = element.name;
    initCard.querySelector('.element__city').textContent = element.name;

    elementList.append(initCard);
})









//лайк карточкам
//  const element = document.querySelectorAll('.element')
//  element.querySelector('.element__button-like').addEventListener('click', function (evt) {
//      evt.target.classList.toggle('element__button-like_active');
//  })
//
// <table>
// <tr>
// <th colspan="3">Квадрат <em>Bagua</em>: Направление, Элемент, Цвет, Значение</th>
// </tr>
// <tr>
// <td>...<strong>Северо-Запад</strong>...</td>
// <td>...</td>
// <td>...</td>
// </tr>
// <tr>...ещё 2 строки такого же вида...</tr>
// <tr>...ещё 2 строки такого же вида...</tr>
// </table>
// const element = document.querySelector('.element') ;//;
//
// element.onclick = function(event) {
//     let target = event.target; // где был клик?
// //необходимо проверить наличие стиля element__button-like в массиве стилей target
//     let event.target = window.getComputedStyle(element__button-like)
//     if (target.classList === 'element__button-like') {
//         // и если нашли стиль element__button-like в массиве стилей target, тогда
//         // делаем тоггл стиля element__button-like_active
//         highlight(target); // подсветить TD
//     }
// };
//
// function highlight(td) {
//     td.classList.toggle('element__button-like_active');
// }

