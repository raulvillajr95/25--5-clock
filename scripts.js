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



function resetSesh() {
  breakId.textContent = 5
  sessionId.textContent = 25
  timeLe.textContent = '25:00'
}