/* Slider functionallity */
const slider = document.querySelector('#slider');
const sliderTrack = document.querySelector('.slider-track');
const sliderFill = sliderTrack.querySelector('.fill');

slider.addEventListener('input', updateSliderFill);

function updateSliderFill() {
    const value = slider.value;
    const step = 100 / slider.max;
    sliderFill.style.width = `${value * step + "%"}`;
}

updateSliderFill();