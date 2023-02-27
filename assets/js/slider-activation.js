// Activation for slider
let sliderConfig = {
  perPage: 4,
  gap: 24,
  arrows: false,
  drag: false,
  pagination: false,
  breakpoints: {
    768: {
      perPage: 3,
    },
    575: {
      perPage: 1,
      padding: { right: 80 },
    },
  },
};

let sliderConfigTwo = {
  perPage: 7,
  gap: 24,
  arrows: false,
  drag: false,
  pagination: false,
  breakpoints: {
    1200: {
      perPage: 5,
    },
    992: {
      perPage: 4,
      drag: true,
    },
    768: {
      perPage: 3,
    },
    575: {
      perPage: 1,
      padding: { right: 80 },
    },
  },
};
new Splide(".slider_1", sliderConfig).mount();
new Splide(".slider_2", sliderConfigTwo).mount();
new Splide(".slider_3", sliderConfigTwo).mount();
new Splide(".slider_4", sliderConfig).mount();
new Splide(".slider_5", sliderConfig).mount();
new Splide(".slider_6", sliderConfig).mount();
new Splide(".slider_7", sliderConfig).mount();
new Splide(".slider_8", sliderConfig).mount();
new Splide(".slider_9", sliderConfig).mount();
new Splide(".slider_10", sliderConfig).mount();
new Splide(".slider_11", sliderConfig).mount();
new Splide(".slider_12", sliderConfig).mount();
new Splide(".slider_13", sliderConfig).mount();
new Splide(".slider_14", sliderConfig).mount();
new Splide(".slider_15", sliderConfig).mount();
new Splide(".slider_16", sliderConfig).mount();
