let hours = 0
let minutes = 0
let seconds = 0

let stopwatch

function start() {
  stopwatch = setInterval(() => {
    timer()
  }, 1000)
}

function pause() {
  clearInterval(stopwatch)
}

function stop() {
  clearInterval(stopwatch)

  hours = 0
  minutes = 0
  seconds = 0

  document.getElementById('cont').innerHTML = "00:00:00"
}

function timer() {
  seconds++

  if (seconds == 60) {
    ss = 0
    minutes++
  }

  if (minutes == 60) {
    minutes = 0
    hours++
  }

  let format =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)

  document.getElementById('cont').innerHTML = format
}