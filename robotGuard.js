const aNameGuard = localStorage.getItem(`aName`)
const aJobGuard = localStorage.getItem(`aJob`)
const aImageGuard = localStorage.getItem(`aImage`)
document.querySelector(`.bNameGuard`).innerText = aNameGuard
document.querySelector(`.bJobGuard`).innerText = `${aNameGuard} the bot guard's job is to protect ${aJobGuard}.`
document.querySelector(`.bImageGuard`).innerHTML = `<img id="showRobotImage" src='${aImageGuard}'>`

function createBot() {
    const aNameGuard = document.querySelector(`.aName`).value
    const aJobGuard = document.querySelector(`.aJob`).value
    const aImageGuard = document.querySelector(`.aImage`).value
    
    localStorage.setItem(`aName`, aNameGuard)
    localStorage.setItem(`aJob`, aJobGuard)
    localStorage.setItem(`aImage`, aImageGuard)

    document.querySelector(`.bName`).innerText = aNameGuard
    document.querySelector(`.bJob`).innerText = aJobGuard
    document.querySelector(`.bImage`).innerHTML = aImageGuard
}