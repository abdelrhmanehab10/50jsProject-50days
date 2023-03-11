const smallBottles = document.querySelectorAll(".small-bottle");
const remained = document.querySelector(".remained");
const fillPrecentage = document.querySelector(".fill-precentage");

updateBigBottle();

smallBottles.forEach((bottle, idx) => {
  bottle.addEventListener("click", () => highlightBottle(idx));
});

function highlightBottle(idx) {
  if (
    smallBottles[idx].classList.contains("fill") &&
    !smallBottles[idx].nextElementSibling.classList.contains("fill")
  ) {
    idx--;
  }
  smallBottles.forEach((bottle, idx2) => {
    if (idx2 <= idx) {
      bottle.classList.add("fill");
    } else {
      bottle.classList.remove("fill");
    }
  });
  updateBigBottle();
}

function updateBigBottle() {
  const fillBottle = document.querySelectorAll(".small-bottle.fill").length;
  const allBottle = smallBottles.length;

  if (fillBottle === 0) {
    fillPrecentage.style.visibility = "hidden";
    fillPrecentage.style.height = 0;
  } else {
    fillPrecentage.style.visibility = "visible";
    fillPrecentage.style.height = `${fillBottle / allBottle * 330}px`;
    fillPrecentage.innerText = `${fillBottle / allBottle * 100}%`;
  }

  if (fillBottle === allBottle) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    remained.innerText = `${2 - (250 * fillBottle) / 1000}L`;
  }
}
