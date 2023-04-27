const aNameGuard = localStorage.getItem(`aNameG`);
const aJobGuard = localStorage.getItem(`aJobG`);
const aImageGuard = localStorage.getItem(`aImageG`);


// Create class for Guard  Robot (lesson9)
// Refactor createBot() to make  object from class (lesson9/10)
// push  to array for guard robots (lesson10)
// save to localstorage (lesson11)

class Guard {
  constructor(name, job, image) {
    this.name = name;
    this.job = job;
    this.image = image;
  }
}

const guardArr = [];

function createBot() {
  console.log('creating robot...')
  document.querySelector('.profile').innerHTML = '';

  const aNameGuard = document.querySelector(`.aNameG`).value;
  const aJobGuard = document.querySelector(`.aJobG`).value;
  const aImageGuard = document.querySelector(`.aImageG`).value;
  const guard = new Guard(aNameGuard, aJobGuard, aImageGuard);
  console.log('created robot...', guard)

  guardArr.push(guard);
  console.log('added to array...', guardArr)

  const strGuardArr = JSON.stringify(guardArr);
  localStorage.setItem("guardArr", strGuardArr);
  console.log('guardArr as string...', strGuardArr)

  guardArr.forEach(function (element) {
    console.log('current robot obj:', element)
    document.querySelector(`.profile`).innerHTML += `
    <img src='${element.image}'/>
    <div class="txt">
        <h2 class="">${element.name}</h2>
        <p class="">${element.job} is ${element.name}'s trusty guard.</p>
    </div>`;
  });

  const guardStr= JSON.stringify(guardArr)
  localStorage.setItem(`guardArr`, guardStr)
  const gotGuardStr = localStorage.getItem(`guardArr`)
  const convertedGuard = JSON.parse(gotGuardStr)
}