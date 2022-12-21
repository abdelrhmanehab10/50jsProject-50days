const textArea = document.querySelector("textarea");
const output = document.querySelector(".output");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

const createTags = (input) => {
  let tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  output.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.innerText = tag;
    output.appendChild(tagEl);
  });
};

const randomSelect = () => {
  let times = 30;
  let intervalSelect = setInterval(() => {
    const randomTag = pickRandomTag();
    if (randomTag !== undefined) {
      highlightTag(randomTag);
      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);
  setTimeout(() => {
    clearInterval(intervalSelect);
    setTimeout(() => {
      const randomChoice = pickRandomTag();
      highlightTag(randomChoice);
    }, 100);
  }, times * 100);
};

const pickRandomTag = () => {
  let tags = document.querySelectorAll("span");
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.classList.add("highlight");
};

const unHighlightTag = (tag) => {
  tag.classList.remove("highlight");
};
