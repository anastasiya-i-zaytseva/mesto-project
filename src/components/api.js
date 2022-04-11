import {jobInput, nameInput} from "./constants";
const cohort = 'plus-cohort-8'
const token = '1b31a8b7-ee35-4c29-ab36-f37a5b454c19';
const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(res)
}

function getConfig(api, method = 'GET') {

    return {
            url: 'https://nomoreparties.co/v1/'+ cohort +'/' + api,
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            },
            method: method
        }
}

export function getCardsFromServer() { // массив карточек с сервера
    const config = getConfig('cards')
    return fetch(config.url, {
            method: config.method,
            headers: config.headers
        }
    ).then(onResponce);
}

export function updateProfileInfo(userName, userAbout) { //редартирование профиля на сервере
    return fetch('https://nomoreparties.co/v1/plus-cohort-8/users/me', {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            name: nameInput.value,
            about: jobInput.value,
        })
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`error${res.status}`);
        });
}

export function addNewCard(data) { //добавление новой карточки
    return fetch('https://nomoreparties.co/v1/plus-cohort-8/cards', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(data)
    })
        .then(onResponce)
}

export function removeCardFromServer(dataId) { //удаление карточки
    const config = getConfig(`cards/${dataId}`, 'DELETE')
    return fetch(config.url, {
        method: config.method,
        headers: config.headers
    })
    .then(onResponce)
    .catch(err => console.error(err))
}

export function editProfile() { //редактирование профиля
    return fetch('https://nomoreparties.co/v1/plus-cohort-8/cards/c8745df7a5ed4bcd55b64d44', {
        method:'PUT',
        headers: this.headers,
        body: JSON.stringify(data)
    })
        .then(onResponce)
}