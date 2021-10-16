const EASY = 'EASY'
const MEDIUM = 'MEDIUM'
const HARD = 'HARD'
const screenWidth = 1024
const gridGap = 5

document.getElementById('defaultOpen').click()

function createFieldItem(index) {
    return `<div class="field__item" data-index="${index}"></div>`
}

function getCellSize(fieldSize) {
    return (screenWidth - (gridGap * (fieldSize - 1))) / fieldSize / 2 + 'px'
}

function createField(mode) {
    let fieldSize = 0
    let field = document.getElementById('field')
    let fieldItems = []

    switch (mode) {
        case EASY:
            fieldSize = 3
            break
        case MEDIUM:
            fieldSize = 5
            break
        case HARD:
            fieldSize = 10
            break
    }

    for (let i = 0; i < fieldSize ** 2; i++) {
        fieldItems.push(createFieldItem(i))
    }

    let cellSize = getCellSize(fieldSize)

    field.style.gridTemplate = `repeat(${fieldSize}, ${cellSize}) / repeat(${fieldSize}, ${cellSize})`
    field.innerHTML = fieldItems.join('')
}

function openPage(e, pageName, mode) {
    let i, tabContent

    tabContent = document.getElementsByClassName('container');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    if (mode) {
        createField(mode)
    }

    document.getElementById(pageName).style.display = 'flex'
}
