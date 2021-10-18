const timerDefault = 59
const timer = document.getElementById('timer')
const points = document.getElementById('points')

let isActive = false
let fieldSize
let globalTime = 0
let pointsCounter = 0
let allMole = 0
let intervals = []

const randomInterval = () => {
    let rand = Math.random() * 10
    console.log(rand)
    return (rand + 5) * 100
}

function onClickMole() {
    pointsCounter++
    points.innerText = pointsCounter
    this.innerHTML = ''
    this.removeEventListener('click', onClickMole)
}

const end = () => {
    setTimeout(() => {
        intervalsCleaner(intervals)
        showResult()
    }, 900)
}

const setMole = (timeInterval, timeMole) => {
    return setInterval(() => {
        if (isActive && globalTime >= 0) {
            let randomCell = document.querySelector('.field__item[data-cell-index="' + Math.floor(Math.random() * fieldSize ** 2) + '"]')
            randomCell.innerHTML = `<img src="src/img/mole.png" width="${getCellSize(fieldSize)}" height="${getCellSize(fieldSize)}" alt="">`
            randomCell.addEventListener('click', onClickMole)
            allMole++
            setTimeout(() => {
                randomCell.innerHTML = ''
                randomCell.removeEventListener('click', onClickMole)
            }, timeMole)
        }
    }, timeInterval)
}

const setTime = () => {
    return setInterval(() => {
        if (isActive && globalTime > 0) {
            globalTime--
            timer.innerText = globalTime
        }
        if (globalTime === 0) {
            end()
        }
    }, 1000)
}

const intervalsCleaner = (intervals) => {
    while (intervals.length > 0) {
        clearInterval(intervals.pop())
    }
}
