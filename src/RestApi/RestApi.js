import {API_URL} from "../config"

    export function create(data) {
        return fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.text());
    }

