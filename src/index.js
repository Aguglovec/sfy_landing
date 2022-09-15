"use strict";

import './style.css';
import './img/bulletpoints1.png';
import './img/bulletpoints1Bg.svg';
import './img/bulletpoints2.png';
import './img/bulletpoints3.png';
import './img/bulletpoints3Bg.svg';
import './img/Group 2.png';
import './img/hero.png';
import './img/heroMobile.png';
import './img/Logo vector.png';
import './img/serumRight.png';
import './img/serumVectorLeft.png';
import './img/serumVectorLeftBg.svg';
import './img/serumVectorLine1.svg';
import './img/serumVectorLine2.svg';
import './img/user1.png';
import './img/user2.png';
import './img/user3.png';
import './img/workBg.png';

import {create} from './RestApi/RestApi'

window.onload=function(){ 

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
console.log(formInputs);
    formInputs.forEach((inp) => {
        if (!item[inp.name] || item[inp.name] === '') {
            item[inp.name] = inp.value;
        }
    });
    console.log(item);
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

}

