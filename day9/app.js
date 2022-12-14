const btns = document.querySelectorAll("#btns button");
const sounds = document.querySelectorAll("audio");

const playSound = (btnId) => {
  sounds.forEach((sound) => {
    if (sound.id === btnId) {
      sound.play();
    } else {
      sound.pause();
    }
  });
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let soundIdentifer = btn.innerHTML;
    playSound(soundIdentifer);
  });
});
