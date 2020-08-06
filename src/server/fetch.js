import React from "react";
import info from "./info";

export function get(endpoint, params) {
    return fetch(info.URI + endpoint, {method: 'get',})
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        }).catch(r => {
            console.log(r)
        });
}

export function signup(data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", data.email);
    urlencoded.append("password", data.password);
    urlencoded.append("firstName", data.firstName);
    urlencoded.append("lastName", data.lastName);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch(info.URI + "/signup", requestOptions)
        .then(response => response.json())
        .then(result => { return result})
        .catch(error => console.log('error', error));
}

export function login(data) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();

    urlencoded.append("email", data.email);
    urlencoded.append("password", data.password);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch(info.URI + "/login", requestOptions)
        .then(response => response.json())
        .then(result => { return result})
        .catch(error => console.log('error', error));
}
