let breakLen = 5
let sessionLen = 25

let breakId = document.getElementById('break-length')
let breakLenNum = breakId.innerText
function decrementBrk() {
  breakLen -= 1
  breakLenNum = breakLen
  console.log(breakLen)
}
function incrementBrk() {
  element.innerText = parseInt(element.innerText) - 1
  return element.innerText
}

let sessionId = document.getElementById('session-length')
let sessionLenNum = sessionId.innerText
function decrementSess() {
  element.innerText = parseInt(element.innerText) + 1
  return element.innerText
}
function incrementSess() {
  element.innerText = parseInt(element.innerText) - 1
  return element.innerText
}

function reset() {
  breakLenNum = '5'
  sessionLenNum = '25'
}