const loading = document.getElementById("loading");
const overlay = document.getElementById("overlay");

let counter = 100;
const decreaseCounter = () => {
  if (counter === 0) {
    overlay.style.filter = `blur(${counter / 10}px)`;
    loading.innerHTML = "";
    clearInterval();
  } else {
    counter--;
    loading.innerHTML = counter + "%";
    overlay.style.filter = `blur(${counter / 10}px)`;
  }
};

setInterval(decreaseCounter, 10);
