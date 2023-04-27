const aNameMaid = localStorage.getItem(`aName`)
const aJobMaid = localStorage.getItem(`aJob`)
const aImageMaid = localStorage.getItem(`aImage`)
document.querySelector(`.bNameMaid`).innerText = aNameMaid
document.querySelector(`.bJobMaid`).innerText = `${aNameMaid} the bot maid's job is to clean ${aJobMaid}'s house.`
document.querySelector(`.bImageMaid`).innerHTML = `<img id="showRobotImage" src='${aImageMaid}'>`

class Maid {
    constructor(name, job, image) {
        this.name = name
        this.job = job
        this.image = image
    }
}

const maidArr = []

function createBot() {
    const aNameMaid = document.querySelector(`.aNameMaid`).value
    const aJobMaid = document.querySelector(`.aJobMaid`).value
    const aImageMaid = document.querySelector(`.aImageMaid`).value

    const maid = new Teacher(aNameMaid, aJobMaid, aImageMaid)
    teacherArr.push(maid)
    
    localStorage.setItem(`aName`, aNameMaid)
    localStorage.setItem(`aJob`, aJobMaid)
    localStorage.setItem(`aImage`, aImageMaid)

    document.querySelector(`.bNameMaid`).innerText = aNameMaid
    document.querySelector(`.bJobMaid`).innerText = aJobMaid
    document.querySelector(`.bImageMaid`).innerHTML = aImageMaid
}