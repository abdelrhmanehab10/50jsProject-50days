const counters = document.querySelectorAll("p");

counters.forEach((counter) => {
  const updateCounter = () => {
    const limit = +counter.attributes.value.value,
      counterValue = +counter.innerText,
      counterNum = limit / 200;
    if (counterValue < limit) {
      counter.innerText = `${Math.ceil(counterValue + counterNum)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = limit;
    }
  };
  updateCounter();
});
