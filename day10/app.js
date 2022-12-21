const btn = document.querySelector(".jokes-box button");
const jokeBox = document.querySelector(".jokes-box p");

const jokes = [
  "What do you call a bee that lives in America? A USB.",
  "My wife told me to rub the herbs on the meat for better flavor. That's sage advice.",
  "If you’re struggling to think of what to get someone for Christmas. Get them a fridge and watch their face light up when they open it.",
  "What kind of bagel can fly? A plain bagel.",
  "Did you hear about the kidnapping at school? It's ok, he woke up.",
  "Can a kangaroo jump higher than the Empire State Building? Of course. The Empire State Building can't jump.",
];

const displayJokes = () => {
  let jokesID = (Math.random() * (jokes.length - 1)).toFixed(0);
  jokeBox.innerHTML = jokes[jokesID];
};

btn.addEventListener("click", () => {
  displayJokes();
});
