const controlls = document.querySelector(".slider-controll_panel");
const allButtons = document.querySelectorAll(".slider-controll_button");
const slidersImages = document.querySelectorAll(".slider-block img");
console.log(slidersImages);
controlls.addEventListener("click", (ev) => {
  let eventButton = ev.target;
  allButtons.forEach((el) => el.classList.remove("active"));
  if (eventButton.tagName == "LI") {
    eventButton.classList.add("active");
  }

  const activeButton = ev.target.getAttribute("data-number");
  const activeSlide = document.querySelector(`[data-value='${activeButton}']`);
  slidersImages.forEach((el) => el.classList.remove("active-slide"));
  activeSlide.classList.add("active-slide");
});
