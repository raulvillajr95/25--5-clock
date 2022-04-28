let brek = 5
let sess = 25

let breakId = document.getElementById('break-length')
let sessionId = document.getElementById('session-length')
let timeLe = document.getElementById('time-left')

function decrement(element) {
  if (parseInt(element.innerText) > 0 && element == sessionId) {
    element.textContent = parseInt(element.innerText) - 1
    timeLe.textContent = `${element.textContent}:00`
  } else if (parseInt(element.innerText) > 0) {
    element.textContent = parseInt(element.innerText) - 1
  }
}
function increment(element) {
  if (parseInt(element.innerText) !== 60 && element == sessionId) {
    element.textContent = parseInt(element.innerText) + 1
    timeLe.textContent = `${element.textContent}:00`
  } else if (parseInt(element.innerText) !== 60) {
    element.textContent = parseInt(element.innerText) + 1
  }
}

let timeCon = timeLe.textContent
let secs = timeCon.slice(timeCon.indexOf(':') + 1)
let mins = timeCon.slice(0, timeCon.indexOf(':'))

let ex = 0
function idk() {
  if (ex == 0) {
    console
    ex = 59
    timeLe.textContent = `${secs}:${ex}`
  } else if (ex < 10) {
    timeLe.textContent = `${secs}:0${ex}`
  } else {
    ex -= 1
    timeLe.textContent = `${secs}:${ex}`
  }
}
setInterval(idk, 1000)

function resetSesh() {
  breakId.textContent = 5
  sessionId.textContent = 25
  timeLe.textContent = '25:00'
}