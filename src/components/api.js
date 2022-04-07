import {jobInput, nameInput} from "./constants";

const cohort = 'plus-cohort-8';
const token = '1b31a8b7-ee35-4c29-ab36-f37a5b454c19';
export const dataId = 'c8745df7a5ed4bcd55b64d44';

function getConfig(api) {
    return {
            url: 'https://nomoreparties.co/v1/'+ cohort +'/' + api,
            headers: {
                "Content-type": "application/json",
                "Authorization":  token
            }
        }
}

const onResponse = (res) => {
    return  res.ok ? res.json() : res.reject()
}

export function getCardsFromServer() { // массив карточек с сервера
    const config = getConfig('cards')
    return fetch(config.url, {
            method: 'GET',
            headers: config.headers
        }
    ).then(onResponse);
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
    return fetch('https://nomoreparties.co/v1/plus-cohort-8/cards ', {
        method:'POST',
        headers: this.headers,
        body: JSON.stringify(data)
    })
        .then(onResponse)
}