const projectName = 'technical-docs-page';
var hamburger = document.querySelector(".hamburger");
var navbar = document.getElementById("navbar");
var maindoc = document.getElementById("main-doc");
var body = document.querySelector("body");
var navlink = document.querySelectorAll("a");
var navbarUp = false;
var panel = document.querySelector("#panel-resize");
var maindocOldScroll = 0;


maindoc.onscroll = function (e) {
  if (window.innerWidth < 815 && navbar.getAttribute('class') !== 'is-active') {
    if (maindocOldScroll > maindoc.scrollTop || this.scrollY === 0) {
      navbar.style.top = "0";
      maindoc.style.top = "5rem";
      if (navbarUp) {
        navbar.style.top = "-5rem";
        maindoc.style.top = "0rem";
        navbarUp = false;
      }
    } else {
      navbar.style.top = "-5rem";
      maindoc.style.top = "0rem";
    }
    maindocOldScroll = maindoc.scrollTop;
  }
}

window.onresize = function (e) {
  if (window.innerWidth >= 815) {
      navbar.style.top = "0";
  }
}
hamburger.addEventListener("click", function () { activate() });

navlink.forEach(x => { x.addEventListener("click", function () { activate() }); });

function activate() {
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("is-active");
  body.classList.toggle("is-active");
  navbarUp = true;
}

// mouse events for #panel-resize
let ismdwn = 0
panel.addEventListener('mousedown', down)

function down(event) {
  ismdwn = 1
  document.body.addEventListener('mousemove', move)
  document.body.addEventListener('mouseup', end)
}

function move(event) {
  if (ismdwn === 1) {
    navbar.style.flexBasis = event.clientX + "px"
  } else {
    end()
  }
}
const end = (e) => {
  ismdwn = 0
  document.body.removeEventListener('mouseup', end)
  panel.removeEventListener('mousemove', move)
}