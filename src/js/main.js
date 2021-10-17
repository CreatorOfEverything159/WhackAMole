const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const menuBtn = document.getElementById('defaultOpen')
const restartBtn = document.getElementById('restartBtn')
const continueBtn = document.getElementById('continueBtn')

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'
    stopBtn.style.display = 'block'
    // start time, points

    isActive = true
})

stopBtn.addEventListener('click', () => {
    continueBtn.style.display = 'block'
    stopBtn.style.display = 'none'
    restartBtn.style.display = 'block'
    // stop time

    isActive = false
})

continueBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'
    stopBtn.style.display = 'block'
    restartBtn.style.display = 'none'
    continueBtn.style.display = 'none'
    // continue time

    isActive = true
})

menuBtn.addEventListener('click', () => {
    // restart time, points

    isActive = false
})

restartBtn.addEventListener('click', () => {
    openPage(event, 'gamePage', globalMode)
    // restart time, points

    isActive = false
})

menuBtn.click()
