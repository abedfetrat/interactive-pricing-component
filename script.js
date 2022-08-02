const pricingComponent = document.querySelector('.pricing-component');
const pageViewsElement = pricingComponent.querySelector('.pageviews');
const priceElement = pricingComponent.querySelector('.price');
const slider = pricingComponent.querySelector('#slider');
const billingSwitch = pricingComponent.querySelector('#billing-switch');
const discountElement = pricingComponent.querySelector('.discount');

const discountAmount = 0.25;

slider.addEventListener('input', updateUI);
billingSwitch.addEventListener('input', updateUI);

updateUI();

function updateUI() {
    updatePageViews();
    updatePricing();

    if (billingSwitch.checked) {
        discountElement.style.display = "block";
        discountElement.textContent = `${discountAmount * 100}% discount`;
    } else {
        discountElement.style.display = "none";
    }
}

function updatePageViews() {
    let pageViews = 0;
    switch (slider.value) {
        case "0":
            pageViews = "10K";
            break;
        case "1":
            pageViews = "50K";
            break;
        case "2":
            pageViews = "100K";
            break;
        case "3":
            pageViews = "500K";
            break;
        case "4":
            pageViews = "1M";
            break;
    }
    pageViewsElement.textContent = pageViews;
}

function updatePricing() {
    const applyDiscount = billingSwitch.checked;
    let price = 0;
    switch (slider.value) {
        case "0":
            price = applyDiscount ? 8 - (8 * discountAmount) : 8;
            break;
        case "1":
            price = applyDiscount ? 12 - (12 * discountAmount) : 12;
            break;
        case "2":
            price = applyDiscount ? 16 - (16 * discountAmount) : 16;
            break;
        case "3":
            price = applyDiscount ? 24 - (24 * discountAmount) : 24;
            break;
        case "4":
            price = applyDiscount ? 36 - (36 * discountAmount) : 36;
            break;
    }
    priceElement.textContent = `$${price}.00`;
}

/* Updates slider progress fill */
const sliderTrack = pricingComponent.querySelector('.slider-track');
const sliderFill = sliderTrack.querySelector('.fill');

slider.addEventListener('input', updateSliderFill);

function updateSliderFill() {
    const value = slider.value;
    const step = 100 / slider.max;
    sliderFill.style.width = `${value * step + "%"}`;
}

updateSliderFill();