'use strict'
/* ========= Variables =========
================================ */

const menuButton = document.querySelector('.hamburger-icon');
const closeButton = document.querySelector('.menu-close');
const offCanvasMenu = document.getElementById('off-canvas-menu');
const menuOverlay = document.querySelector('.menu-overlay');

const pageUp = document.querySelector('.up');
const pageDown = document.querySelector('.down');

/* ========= Functions =========
================================ */

let openMenu = function () {
        offCanvasMenu.classList.remove('closed');
        offCanvasMenu.classList.add('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuOverlay.style.display = 'block';
};

let closeMenu = function () {
        offCanvasMenu.classList.remove('open');
        offCanvasMenu.classList.add('closed');
        menuButton.setAttribute('aria-expanded', 'false');
        menuOverlay.style.display = 'none';
};

let movePageUp = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                pageUp.style.display = 'block';
        } else {
                pageUp.style.display = 'none';
        }
};


/* ========== Events ===========
================================ */

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

pageUp.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        movePageUp;
})

pageDown.addEventListener('click', () => {
        document.body.scrollTop = document.body.scrollHeight;
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
})