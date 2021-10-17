const EASY = 'EASY'
const MEDIUM = 'MEDIUM'
const HARD = 'HARD'
const screenWidth = 1024
const gridGap = 5
let globalMode

const createFieldItem = (index) => {
    return `<div class="field__item" data-cell-index="${index}"></div>`
}

const getCellSize = (fieldSize) => {
    return (screenWidth - (gridGap * (fieldSize - 1))) / fieldSize / 2 + 'px'
}

const setFieldSize = (mode) => {
    switch (mode) {
        case EASY:
            return 3
        case MEDIUM:
            return 5
        case HARD:
            return 10
    }
}

const createField = (mode) => {
    globalMode = mode
    fieldSize = setFieldSize(mode)
    let field = document.getElementById('field')
    let fieldItems = []

    for (let i = 0; i < fieldSize ** 2; i++) {
        fieldItems.push(createFieldItem(i))
    }

    let cellSize = getCellSize(fieldSize)

    field.style.gridTemplate = `repeat(${fieldSize}, ${cellSize}) / repeat(${fieldSize}, ${cellSize})`
    field.innerHTML = fieldItems.join('')
}

const openPage = (e, pageName, mode) => {
    e.preventDefault()
    let tabContent = document.getElementsByClassName('container');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none'
    }

    if (mode) {
        createField(mode)
        menuBtn.style.display = 'block'
        startBtn.style.display = 'block'
        stopBtn.style.display = 'none'
        restartBtn.style.display = 'none'
        continueBtn.style.display = 'none'
        timer.innerText = timerDefault
        points.innerText = 0
        document.getElementById('stopBtn').style.display = 'none'
    }

    document.getElementById(pageName).style.display = 'flex'
}

const showResult = () => {
    document.getElementById('pointsRes').innerText = pointsCounter
    document.getElementById('allPoints').innerText = allMole
    document.getElementById('gamePage').style.display = 'none'
    document.getElementById('resultPage').style.display = 'flex'
}
