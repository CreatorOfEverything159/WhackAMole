const timerDefault = 59
const timer = document.getElementById('timer')
const points = document.getElementById('points')
let fieldSize
let isActive = false

let interval = setInterval(() => {
    if (isActive) {
        let randomCell = document.querySelector('.field__item[data-cell-index="' + Math.floor(Math.random() * fieldSize ** 2) + '"]')
        randomCell.style.backgroundColor = '#aaaaaa'
        console.log('setInterval')
    }
}, 500)

function startTimer() {

}
