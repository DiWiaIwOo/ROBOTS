const aNameCook = localStorage.getItem(`aName`)
const aJobCook = localStorage.getItem(`aJob`)
const aImageCook = localStorage.getItem(`aImage`)
document.querySelector(`.bNameCook`).innerText = aNameCook
document.querySelector(`.bJobCook`).innerText = `${aNameCook} the bot cook's job is to make food for ${aJobCook}.`
document.querySelector(`.bImageCook`).innerHTML = `<img id="showRobotImage" src='${aImageCook}'>`

function createBot() {
    const aNameCook = document.querySelector(`.aName`).value
    const aJobCook = document.querySelector(`.aJob`).value
    const aImageCook = document.querySelector(`.aImage`).value
    
    localStorage.setItem(`aName`, aNameCook)
    localStorage.setItem(`aJob`, aJobCook)
    localStorage.setItem(`aImage`, aImageCook)

    document.querySelector(`.bName`).innerText = aNameCook
    document.querySelector(`.bJob`).innerText = aJobCook
    document.querySelector(`.bImage`).innerHTML = aImageCook
}