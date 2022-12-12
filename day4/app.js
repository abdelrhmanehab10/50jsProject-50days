const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

searchBtn.addEventListener("click", () => {
  if (searchInput.classList.value === "open") {
    searchInput.classList.remove("open");
  } else {
    searchInput.classList.add("open");
  }
});
