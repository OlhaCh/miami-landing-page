'use strict';

const body = document.querySelector('.page__body');
const menu = document.getElementById('menu-open');
const closeMenu = document.getElementById('menu-close');
const form = document.getElementById('form');

menu.addEventListener('click', () => {
  body.classList.add('page__body--no-scroll');
});

closeMenu.addEventListener('click', () => {
  body.classList.remove('page__body--no-scroll');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
