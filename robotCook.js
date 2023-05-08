const aNameCook = localStorage.getItem(`aNameC`);
const aJobCook = localStorage.getItem(`aJobC`);
const aImageCook = localStorage.getItem(`aImageC`);


// Create class for Cook  Robot (lesson9)
// Refactor createBot() to make  object from class (lesson9/10)
// push  to array for cook robots (lesson10)
// save to localstorage (lesson11)

class Cook {
  constructor(name, job, image) {
    this.name = name;
    this.job = job;
    this.image = image;
  }
}

const cookArr = [];

function createBot() {
  console.log('creating robot...')
  document.querySelector('.profile').innerHTML = '';

  const aNameCook = document.querySelector(`.aNameC`).value;
  const aJobCook = document.querySelector(`.aJobC`).value;
  const aImageCook = document.querySelector(`.aImageC`).value;
  const cook = new Cook(aNameCook, aJobCook, aImageCook);
  console.log('created robot...', cook)

  cookArr.push(cook);
  console.log('added to array...', cookArr)

  const strCookArr = JSON.stringify(cookArr);
  localStorage.setItem("cookArr", strCookArr);
  console.log('cookArr as string...', strCookArr)

  cookArr.forEach(function (element) {
    console.log('current robot obj:', element)
    document.querySelector(`.profile`).innerHTML += `
    <img src='${element.image}'/>
    <div class="txt">
        <h2 class="">${element.name}</h2>
        <p class="">${element.name} is ${element.job}'s personal cook.</p>
    </div>`;
  });

  const cookStr= JSON.stringify(cookArr)
  localStorage.setItem(`cookArr`, cookStr)
  const gotCookStr = localStorage.getItem(`cookArr`)
  const convertedCook = JSON.parse(gotCookStr)
}

let killBot = document.getElementById("deadBot").value

function destroyBotButton() {
  const destroyBot = cookArr.filter(function(element) {
    return element !== 'killBot'
  })
}