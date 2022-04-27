let brek = 5
let sess = 25

let breakId = document.getElementById('break-length')
let sessionId = document.getElementById('session-length')

function decrement(element) {
  if (parseInt(element.innerText)) {
    element.textContent = parseInt(element.innerText) - 1
  }
}
function increment(element) {
  if (parseInt(element.innerText)) {
    element.textContent = parseInt(element.innerText) + 1
  }
}

function resetSesh() {
  breakId.textContent = 5
  sessionId.textContent = 25
}