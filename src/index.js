"use strict";

import './style.css';

import {create} from './RestApi/RestApi'

const ERROR_MESSAGES = {
    name: 'Введите имя',
    phone: 'Введите номер телефона',
};

const errorMsgEls = document.querySelectorAll("#error"); 
const formInputs = document.querySelectorAll('.form-input');
const userForm1 = document.querySelector("#userForm1");
const userForm2 = document.querySelector("#userForm2");
const bigMsgEL = document.querySelector("#bigMsg");

userForm1.addEventListener("submit", onItemSubmit);
userForm2.addEventListener("submit", onItemSubmit);
bigMsgEL.addEventListener("click", onBigClick);

function onItemSubmit(e) {
    e.preventDefault();
    const newContact = getItem();

    if (isValid(newContact)) {   
        clearInput();
        create(newContact)
        .then(() => {bigMsgEL.classList.toggle('hidden')});
    }
}

function getItem() {
    const item = {};
    formInputs.forEach((inp) => {
        if (!item[inp.name] || item[inp.name] === '') {
            item[inp.name] = inp.value;
        }
    });
    return item;
}

function isValid (obj) {
    for (let key in obj) {
        if (obj[key] === '')  { 
            errorMsg(ERROR_MESSAGES[key]);
            return false;
        }
    }
    errorMsg();
    return true;
}

function errorMsg(error) {
    errorMsgEls.forEach(element => {
        element.textContent = error;
    });
}

function clearInput() {
    userForm1.reset();
    userForm2.reset();
}

function onBigClick() {
    bigMsgEL.classList.toggle('hidden'); 
}


