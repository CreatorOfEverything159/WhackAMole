const EASY = 'EASY'
const MEDIUM = 'MEDIUM'
const HARD = 'HARD'

document.getElementById('defaultOpen').click()

function createFieldItem(index) {
    return `<div class="field__item" data-index="${index}"></div>`
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

    field.style.gridTemplate = `repeat(${fieldSize}, 1fr) / repeat(${fieldSize}, 1fr)`
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
