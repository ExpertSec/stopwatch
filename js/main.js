const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapseTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapseTime;
    timer = setInterval(updateDisplay, 10);
  }
}

function stop() {
  if (isRunning) {
    elapseTime = Date.now() - startTime;
    isRunning = false;
    clearInterval(timer);
  }
}
function reset() {
  clearInterval(timer);
  elapseTime = 0;
  startTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}
function updateDisplay() {
  const currentTime = Date.now();
  elapseTime = currentTime - startTime;
  let hours = Math.floor(elapseTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapseTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapseTime / 1000) % 60);
  let miliSeconds = Math.floor(elapseTime % 1000);
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliSeconds = String(miliSeconds).padStart(3, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`;
}
