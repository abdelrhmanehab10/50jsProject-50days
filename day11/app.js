const container = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
  container.innerHTML = `<div class="box">
  <span>event.key</span>
  <p>${e.key === " " ? "Space" : e.key}</p>
</div>
<div class="box">
  <span>event.keyCode</span>
  <p>${e.keyCode}</p>
</div>
<div class="box">
  <span>event.code</span>
  <p>${e.code}</p>
</div>`;
});
