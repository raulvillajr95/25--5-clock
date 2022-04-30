let brek = 5
let sess = 25

let breakId = document.getElementById('break-length')
let sessionId = document.getElementById('session-length')
let timeLe = document.getElementById('time-left')
let timerLabel = document.getElementById('timer-label')

breakId.innerText = brek
sessionId.innerText = sess

// Break Length +/-
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
// Session Length +/-
function decrementSs() {
  if (sess > 1 && sess < 11) {
    sess -= 1
    sessionId.textContent = sess
    timeLe.textContent = `0${sess}:00`
  } else if (sess > 1) {
    sess -= 1
    sessionId.textContent = sess
    timeLe.textContent = `${sess}:00`
  }
}
function incrementSs() {
  if (sess !== 60 && sess < 9) {
    sess += 1
    sessionId.textContent = sess
    timeLe.textContent = `0${sess}:00`
  } else if (sess !== 60) {
    sess += 1
    sessionId.textContent = sess
    timeLe.textContent = `${sess}:00`
  }
}

/*
within session,
if session == '00:00',
  sound alarm
  run specified break

within break,
if break == '00:00'
  sound alarm
  run specified session

Ideas:
-fix negative numbers
  within session timer they're allowed to go to 00:00
-instead of at 0:00, i can trigger it when it goes under 0:00
-have it reach 0:00
-i can use the '' to not let it change time while timer is running
-i might have to add a 'do_that' similar to 'do_this' for breaks to stop when session runs again
  it'll have the running timer and everything except the whole function
-actually add the whole function
  start() starts session only,
    it can pause both though
-i might have to mess with the switches more 'TimerRunning'
*/

let secs = 0
// Use 'sess' for minutes

function session() {
  if (secs == 0) {
    sess -= 1
    secs = 59
    timeLe.textContent = `${sess}:${secs}`
  } else if (secs > 0 && secs >= 11 && sess == 0) {
    secs -= 1
    timeLe.textContent = `0${sess}:${secs}`
  } else if (secs < 11 && secs > 0 && sess == 0) {
    secs -= 1
    timeLe.textContent = `0${sess}:0${secs}`
  } else if (secs < 11 && secs > 0) {
    secs -= 1
    timeLe.textContent = `${sess}:0${secs}`
  } else {
    secs -= 1
    timeLe.textContent = `${sess}:${secs}`
  }

  console.log(sess, secs)
  if (sess == 0 && secs == 0 && brekTimerRunning == false) {
    timerLabel.textContent = 'Break'
    timeLe.textContent = "00:00"
    secs = 0
    brek = parseInt(breakId.innerText)
    sessTimerRunning = false
    brekTimerRunning = true
    do_this = clearInterval(do_this)
    setInterval(brekLen, 1000)
  }
}
function brekLen() {
  if (secs == 0) {
    brek -= 1
    secs = 59
    timeLe.textContent = `${brek}:${secs}`
  } else if (secs > 0 && secs >= 11 && brek == 0) {
    secs -= 1
    timeLe.textContent = `${brek}:${secs}`
  } else if (secs < 11 && secs > 0 && brek == 0) {
    secs -= 1
    timeLe.textContent = `0${brek}:0${secs}`
  } else if (secs < 11 && secs > 0) {
    secs -= 1
    timeLe.textContent = `${brek}:0${secs}`
  } else {
    secs -= 1
    timeLe.textContent = `${brek}:${secs}`
  }
  console.log(brek, secs)
  if (brek == 0 && secs == 0 && sessTimerRunning == false) {
    timerLabel.textContent = 'Session'
    timeLe.textContent = "00:00"
    secs = 0
    sess = parseInt(sessionId.innerText)
    sessTimerRunning = true
    brekTimerRunning = false
    do_that = clearInterval(do_that)
    setInterval(session, 1000)
  }
}

// Running Time Switches
let sessTimerRunning = false
let do_this;

let brekTimerRunning = false
let do_that;


function start() {
  if (sessTimerRunning == false) {
    sessTimerRunning = true
    do_this = setInterval(session, 1000) 
  } else if (sessTimerRunning == true) {
    sessTimerRunning = false
    do_this = clearInterval(do_this)
  }
}

/* 
for start and stop,
  I could some how use the 'sessTimerRunning' to see if it's on or not
*/

function resetSesh() {
  breakId.textContent = 5
  sessionId.textContent = 25
  timeLe.textContent = '25:00'
  brek = 5
  sess = 25
  secs = 0
  //add something to stop any running timer
}