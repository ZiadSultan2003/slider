let wrapper = document.querySelector(".wrapper");
let loginlink = document.querySelector(".login-link");
let registerlink = document.querySelector(".register-link");
// let BTNpopup = document.querySelector(".BTNLogin-popup");
let BTNpopup = document.querySelector(".btnlogin-popup");
let closemodal = document.querySelector("#closemodal");
let login = document.getElementById("login");

registerlink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginlink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
BTNpopup.addEventListener("click", () => {
  //   wrapper.classList.add("active-popup");
  wrapper.style.transform = "scale(1)";
});
closemodal.addEventListener("click", () => {
  wrapper.style.cssText = "display: none;";
  wrapper.style.cssText = "display: block;";
});
//#region slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
//#endregion slider
