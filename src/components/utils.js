function toggleClass(object, styleName) {
    object.classList.toggle(styleName);
}

// тумблер открыть-закрыть попап
export function togglePopup(popup) {
    toggleClass(popup, 'popup_opened');
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

