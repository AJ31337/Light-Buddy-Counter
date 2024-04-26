let sentEl = document.getElementById("lightSent-el")
let recvEl = document.getElementById("lightReceived-el")
let prevEl = document.getElementById("previousLight-el")

let sent = 0
let recv = 0

function lightSent() {
    sent += 1
    sentEl.textContent = sent
}

function resetSent () {
    sent = 0
    sentEl.textContent = sent
}

function received() {
    recv += 1
    recvEl.textContent = recv
}

function resetRecv() {
    recv = 0
    recvEl.textContent = sent
}

function previous() {
    prevEl.textContent += "S:" + sent + "R:" + recv + ", "
    console.log(sent,recv)
    sent = 0
    sentEl.textContent = sent
    recv = 0
    recvEl.textContent = recv
}

function resetPrev() {
    prevEl.textContent = "Previous Constellations: "
}