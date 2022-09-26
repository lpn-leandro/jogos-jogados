'use strict';

const USERNAME_KEY = 'leandro';
const LOGGED_IN_KEY = 'eh_logado';

$(function (){
    let isLoggedIn = localStorage.getItem(LOGGED_IN_KEY);

    let navbar = estaLogado ? '/navbar.html' : '/navbar-anon.html';
    $('#navbar').load(navbar);
    $('#footer').load('/footer.html');
});

export {USERNAME_KEY as LOGGED_IN_KEY };