import {closePopupWithEsc, closePopupWithClick} from './modal.js';
export let popupOpened;

function toggleClass(object, styleName) {
    object.classList.toggle(styleName);
}

// тумблер открыть-закрыть попап
export function togglePopup(popup) {
    toggleClass(popup, 'popup_opened');
}

export function closePopup(popup) {
    document.removeListener('keydown');
    document.removeListener('click');
    togglePopup(popup);
    //popup.classList.remove('popup_opened');
}

export function openPopup(popup) {
    popupOpened = popup;
    document.addEventListener('keydown', closePopupWithEsc);
    document.addEventListener('click', closePopupWithClick);
    togglePopup(popup);
}
