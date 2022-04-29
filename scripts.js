let brek = 5
let sess = 25

let breakId = document.getElementById('break-length')
let sessionId = document.getElementById('session-length')
let timeLe = document.getElementById('time-left')

breakId.innerText = brek
sessionId.innerText = sess

// Break Length
function decrementBr() {
  if (brek > 1) {
    brek -= 1
    breakId.textContent = brek
  }
}
function incrementBr() {
  if (brek !== 60) {
    brek += 1
    breakId.textContent = brek
  }
}
// Session Length
function decrementSs() {
  if (sess > 1) {
    sess -= 1
    sessionId.textContent = sess
    timeLe.textContent = `${sess}:00`
  }
}
function incrementSs() {
  if (sess !== 60) {
    sess += 1
    sessionId.textContent = sess
    timeLe.textContent = `${sess}:00`
  }
}

let secs = 0
// Use 'sess' for minutes

/*
within session,
if session == '00:00',
  sound alarm
  run specified break

within break,
if break == '00:00'
  sound alarm
  run specified session
*/

function session() {
  if (secs == 0) {
    sess -= 1
    secs = 59
    timeLe.textContent = `${sess}:${secs}`
  } else if (secs < 11) {
    secs -= 1
    timeLe.textContent = `${sess}:0${secs}`
  } else {
    secs -= 1
    timeLe.textContent = `${sess}:${secs}`
  }
}
function brekLen() {
  if (secs == 0) {
    sess -= 1
    secs = 59
    timeLe.textContent = `${sess}:${secs}`
  } else if (secs < 11) {
    secs -= 1
    timeLe.textContent = `${sess}:0${secs}`
  } else {
    secs -= 1
    timeLe.textContent = `${sess}:${secs}`
  }
}

function start() {
  
}
//setInterval(session, 1000)

function resetSesh() {
  breakId.textContent = 5
  sessionId.textContent = 25
  timeLe.textContent = '25:00'
  brek = 5
  sess = 25
  secs = 0
  //add something to stop any running timer
}