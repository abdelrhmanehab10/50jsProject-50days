const contents = document.querySelectorAll(".content");

whichBox();
addEventListener("scroll", whichBox);
function whichBox() {
  const bottom = (window.innerHeight / 5) * 4; //500;
  contents.forEach((content) => {
    let contentTop = content.getBoundingClientRect().top;
    console.log(content.getBoundingClientRect());
    if (contentTop < bottom) {
      content.classList.add("show");
    } else {
      content.classList.remove("show");
    }
  });
}
