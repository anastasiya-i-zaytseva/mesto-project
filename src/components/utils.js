export function toggleClass(object, styleName) {
    object.classList.toggle(styleName);
}

export const toggleButtonState = (button, isActive, inactiveButtonClass) => {
    if(isActive){
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(inactiveButtonClass);
        button.disabled = true;
    }
}