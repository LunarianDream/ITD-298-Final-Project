'use strict';

const jelissaImage = document.querySelector('#jelissa');
const davidImage = document.querySelector('#david');
const rashaadImage = document.querySelector('#rashaad');
const ayawoviImage = document.querySelector('#ayawovi');

const jelissaAudio = document.querySelector('#jelissa-audio');
const davidAudio = document.querySelector('#david-audio');
const rashaadAudio = document.querySelector('#rashaad-audio');
const ayawoviAudio = document.querySelector('#ayawovi-audio');

jelissaImage.addEventListener('click', () => {
    if (jelissaAudio.paused) {
        jelissaAudio.play();
    } else {
        jelissaAudio.pause();
    }
})

davidImage.addEventListener('click', () => {
    if (davidAudio.paused) {
        davidAudio.play();
    } else {
        davidAudio.pause();
    }
});

rashaadImage.addEventListener('click', () => {
    if (rashaadAudio.paused) {
        rashaadAudio.play();
    } else {
        rashaadAudio.pause();
    }
})

ayawoviImage.addEventListener('click', () => {
    if (ayawoviAudio.paused) {
        ayawoviAudio.play();
    } else {
        ayawoviAudio.pause();
    }
})