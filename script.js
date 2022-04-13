const humberger = document.querySelector('.fa-bars');
const timesIcon = document.querySelector('.fa-times');
const slideBar = document.querySelector('.slide-bar_mobile');
const slideLi = document.querySelectorAll('.header_items_mobile li');

humberger.addEventListener('click', () => {
  slideBar.style.left = '0';
});
timesIcon.addEventListener('click', () => {
  slideBar.style.left = '-100%';
});

slideLi.forEach((n) => n.addEventListener('click', () => {
  slideBar.style.left = '-100%';
}));