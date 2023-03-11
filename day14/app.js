const toggleIcon = document.querySelector(".icon");
const container = document.querySelector(".container");

toggleIcon.addEventListener("click", () => {
  container.classList.toggle("active");
});
