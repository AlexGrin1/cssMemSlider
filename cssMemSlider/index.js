const controlls = document.querySelector(".slider-controll_panel");
const allButtons = document.querySelectorAll(".slider-controll_button");
const slidersImages = document.querySelectorAll(".slider-block img");
const allDescriptions = document.querySelectorAll(".description");
controlls.addEventListener("click", (ev) => {
  if (ev.target.tagName != "UL") {
    let eventButton = ev.target;
    if (eventButton.tagName == "LI") {
      allButtons.forEach((el) => el.classList.remove("active"));
      eventButton.classList.add("active");
    }
    const activeButton = ev.target.getAttribute("data-number");
    const activeSlide = document.querySelector(`[data-value='${activeButton}']`);
    const activeDescription = document.querySelector(`[data-description='${activeButton}']`);

    slidersImages.forEach((el) => el.classList.remove("active-slide"));

    activeSlide.classList.remove("hidden");
    activeSlide.classList.add("active-slide");
    // activeSlide.classList.add("slide-hidden-effect");
    activeDescription.classList.add("hidden-effect");
    allDescriptions.forEach((el) => el.classList.remove("active-description"));
    setTimeout(function () {
      activeDescription.classList.remove("hidden-description");
      activeDescription.classList.add("active-description");
    }, 300);
  }
});
