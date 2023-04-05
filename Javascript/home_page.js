'use strict';

/* ========== Slide Buttons ========== */

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const carouselNav = document.querySelector('#carousel-navigation');
let slideBtns = document.querySelectorAll('.slide-btn');


/* ========== Image Slides ========== */

let imageSlides = document.querySelectorAll('.image-slide');
let slideWidth = imageSlides[0].getBoundingClientRect().width;

let imageOffset = 0;
let imageWidth = slideWidth;
let counter = 0;

/* ========== Sections ========== */

let seeMore = document.querySelectorAll('section');




/* ========== Functions ========== */

if (imageOffset == 0) {
    prevBtn.style.display = 'none';
}

let moveSlide = function () {
    let translate = `translateX(${imageOffset}px)`;

    for (let imageSlide of imageSlides) {
        imageSlide.style.transform = translate;
    }


    if (imageOffset <= imageWidth * -5) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }

    if (imageOffset >= 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
};

let trackCarousel = () => {

    for (let i = 0; i < slideBtns.length; i++) {
        if (i == counter) {
            slideBtns[i].classList.add('selected');
            imageSlides[i].classList.add('selected');
        } else  {
            slideBtns[i].classList.remove('selected');
            imageSlides[i].classList.remove('selected');
        }
    }

};

/* Information Blocks */

for (let i = 0; i < seeMore.length; i++) {
    seeMore[i].addEventListener('click', () => {
        seeMore[i].style.height = 'auto';
    });
    
};

/* ========== Events ========== */ 

nextBtn.addEventListener('click', () => {
    imageOffset = imageOffset - imageWidth;

    counter++;
    moveSlide();
    trackCarousel();
});

prevBtn.addEventListener('click', () => {
    imageOffset = imageOffset + imageWidth;
    counter--;
    moveSlide();
    trackCarousel();

});

carouselNav.addEventListener('click', e => {
    let slideBtn = e.target.closest('.slide-btn');
    slideBtn.classList.add('selected');
    siblingButtons.classList.remove('selected');
    siblingButtons.classList.remove('selected');

    console.log(siblingButtons);
});