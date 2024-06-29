function getRandomValue() {
  return Math.floor(Math.random() * 10) + 1;
}

function generateBubble() {
  let clutter = "";
  for (let i = 0; i < 220; i++) {
    let value = getRandomValue();
    clutter += `<div class='bubble'>${value}</div>`;
  }
  document.querySelector(".play").innerHTML = clutter;
}

function hitValue() {
  document.querySelector("#hit").innerHTML = `${getRandomValue()}`;
}

function setTimer() {
  let time = 60;
  let timer = setInterval(() => {
    time--;
    document.querySelector("#timer").innerHTML = time;
    if (time === 0) {
      clearInterval(timer);
      document.querySelector(".play").style.display = "none";
      document.querySelector(".game-over").style.display = "block";
    }
  }, 1000);
}

function increaseScore() {
  let score = document.querySelector("#score").innerHTML;
  score++;
  document.querySelector("#score").innerHTML = score;
}

function play() {
  generateBubble();
  hitValue();
  setTimer();
  document.querySelector(".play").addEventListener("click", function (details) {
    let hit = document.querySelector("#hit").innerHTML;
    if (details.target.innerHTML == hit) {
      increaseScore();
      hitValue();
      generateBubble();
    }
  });
}

play();
