const sliderImgs = document.querySelectorAll(".slider img");
const next = document.querySelector(".fa-arrow-right");
const prev = document.querySelector(".fa-arrow-left");

let activeImg = 0;
next.addEventListener("click", () => {
  activeImg === 4 ? (activeImg = 0) : activeImg;
  activeImg++;
  sliderImgs.forEach((img) => {
    img.classList.remove("active");
  });
  sliderImgs[activeImg].classList.add("active");
  document.body.style.backgroundImage = `url(${sliderImgs[activeImg].src})`;
});

prev.addEventListener("click", () => {
  activeImg === 0 ? (activeImg = 4) : activeImg;
  activeImg--;
  sliderImgs.forEach((img) => {
    img.classList.remove("active");
  });
  sliderImgs[activeImg].classList.add("active");
  document.body.style.backgroundImage = `url(${sliderImgs[activeImg].src})`;
});
