const canvas = document.querySelector("#draw-canvas"),
  clearBtn = document.querySelector(".right span"),
  sizeEl = document.querySelector(".size p"),
  decrease = document.querySelector(".size span:nth-child(1)"),
  increase = document.querySelector(".size span:nth-child(3)"),
  colorEl = document.querySelector("#color"),
  ctx = canvas.getContext("2d");

let isDrawing = false,
  size = 10,
  color = "black",
  x,
  y;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    const x2 = e.offsetX,
      y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

increase.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }

  sizeEl.innerText = size;
});

decrease.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }

  sizeEl.innerText = size;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener("change", (e) => (color = e.target.value));
