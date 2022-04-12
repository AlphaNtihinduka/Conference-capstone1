const humberger = document.querySelector(".fa-bars");
const times_icon = document.querySelector(".fa-times");
const slideBar = document.querySelector(".slide-bar_mobile");
const timesIcon = document.querySelector(".fa-times");
const slideLi = document.querySelectorAll(".header_items_mobile li")

humberger.addEventListener("click", function(){
    slideBar.style.left="0";
    console.log("hambuger")
})
times_icon.addEventListener("click", function(){
    slideBar.style.left="-100%";
})

slideLi.forEach((n) => n.addEventListener('click', () => {
    slideBar.style.left="-100%";
  }));