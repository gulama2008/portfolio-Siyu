const menuIcon = document.querySelector(".navbar__menu__hb");
const menu = document.querySelector('.navbar__menu__list--sm');
const body = document.querySelector('body');
const aboutMe = document.querySelector(".section--about-me");
const sections = document.querySelectorAll("section");
const messageBtn = document.querySelector(
  ".section--contact__content__item--form--btn"
);
let isMenuOpen = false;

function clickOnMenuIcon() { 
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menu.style.display = 'block';
    aboutMe.style.marginTop='280px';
  } else { 
    menu.style.display = 'none';
    aboutMe.style.marginTop = "80px";
  }
}
menuIcon.addEventListener('click', clickOnMenuIcon) 

function resizeWindow() {
  console.log(window.innerWidth);
  if (window.innerWidth > 768) {
    menu.style.display = 'none';
    aboutMe.style.marginTop = "80px";
  } 
}
window.addEventListener('resize', resizeWindow)

// function clickOnPage() { 
//   menu.style.display = 'none';
// }
// body.addEventListener('click', clickOnPage);
function sendMessage(event) { 
  event.preventDefault();
  alert(
    "Thank you for sending me a message. I will get in touch with you as soon as possible."
  );
  
}
messageBtn.addEventListener('click', sendMessage)

sections.forEach((section) => { 
    section.classList.add('loadin')
})
var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
    }
  });
};
const observer = new IntersectionObserver(observerCallback, options);

sections.forEach((element) => {
  observer.observe(element);
});

