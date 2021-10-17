const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const menuBtn = document.getElementById('defaultOpen')
const restartBtn = document.getElementById('restartBtn')
const continueBtn = document.getElementById('continueBtn')
const okBtn = document.getElementById('okBtn')

startBtn.addEventListener('click', () => {
    isActive = true
    startBtn.style.display = 'none'
    stopBtn.style.display = 'block'
    globalTime = timerDefault
    pointsCounter = 0
    allMole = 0

    if (globalMode === EASY) {
        intervals.push(setMole(1000, 1000))
    } else if (globalMode === MEDIUM) {
        intervals.push(setMole(1500, randomInterval()))
        intervals.push(setMole(1000, randomInterval()))
    } else if (globalMode === HARD) {
        intervals.push(setMole(1500, randomInterval()))
        intervals.push(setMole(1000, randomInterval()))
        intervals.push(setMole(2000, randomInterval()))
    }
    intervals.push(setTime())
})

stopBtn.addEventListener('click', () => {
    isActive = false
    continueBtn.style.display = 'block'
    stopBtn.style.display = 'none'
    restartBtn.style.display = 'block'
})

continueBtn.addEventListener('click', () => {
    isActive = true
    startBtn.style.display = 'none'
    stopBtn.style.display = 'block'
    restartBtn.style.display = 'none'
    continueBtn.style.display = 'none'
})

menuBtn.addEventListener('click', () => {
    isActive = false
    globalTime = timerDefault
    pointsCounter = 0
    intervalsCleaner(intervals)
})

restartBtn.addEventListener('click', () => {
    isActive = false
    globalTime = timerDefault
    pointsCounter = 0
    intervalsCleaner(intervals)
    openPage(event, 'gamePage', globalMode)
})

okBtn.addEventListener('click', () => {
    restartBtn.click()
    document.getElementById('resultPage').style.display = 'none'
    document.getElementById('gamePage').style.display = 'flex'
})

menuBtn.click()
