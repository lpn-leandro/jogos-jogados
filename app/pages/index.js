'use strict';

import {LOGGED_IN_KEY, USERNAME_KEY} from '../util/shared.js';

//usuário definido na forma literal
function inicializaUsuarios() {
  if (localStorage.getItem(USERNAME_KEY) != null) {
    return false;
  }

  //usuário definido na forma literal
  const user = {
    username: USERNAME_KEY,
    password: '123456789',
  };

  localStorage.setItem(USERNAME_KEY, JSON.stringify(user));
  localStorage.setItem(LOGGED_IN_KEY, false);
}

/**
 * Apresenta ou esconde o painel de operações de acordo com o estado de login.
 */
function showOperations() {
  let isLoggedIn = localStorage.getItem(LOGGED_IN_KEY);

  if (isLoggedIn === 'true') {
    
  }
}

function focus() {
  document.getElementById('user').style.borderColor = 'green';
}

function blur(){
  document.getElementById('senha').style.borderColor ='red';
}

/**
 * Inicializa a aplicação com o cadastro de um usuário padrão e
 * também com a apresentação de alguns dados.
 */
window.onload = function () {
  showOperations();
  inicializaUsuarios();
};

document.querySelector('#login').onclick = function () {
  window.alert('Confirme que você não é um robo');
  let value;
  let confirmacao;
  value = parseInt(window.prompt('Confirme que você não é um robo: 7 + 4 = ?'));
  confirmacao = window.confirm('Deseja continuar?');
  if (value === 11 && confirmacao === true) {
    window.open('/home.html', '_SELF');
  } else {
    window.alert('Captcha incorreto e/ou confirmação negada. Tente novamente!');
  }
};
