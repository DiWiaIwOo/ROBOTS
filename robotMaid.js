const aNameMaid = localStorage.getItem(`aNameM`);
const aJobMaid = localStorage.getItem(`aJobM`);
const aImageMaid = localStorage.getItem(`aImageM`);


// Create class for Maid  Robot (lesson9)
// Refactor createBot() to make  object from class (lesson9/10)
// push  to array for maid robots (lesson10)
// save to localstorage (lesson11)

class Maid {
  constructor(name, job, image) {
    this.name = name;
    this.job = job;
    this.image = image;
  }
}

const maidArr = [];

function createBot() {
  console.log('creating robot...')
  document.querySelector('.profile').innerHTML = '';

  const aNameMaid = document.querySelector(`.aNameM`).value;
  const aJobMaid = document.querySelector(`.aJobM`).value;
  const aImageMaid = document.querySelector(`.aImageM`).value;
  const maid = new Maid(aNameMaid, aJobMaid, aImageMaid);
  console.log('created robot...', maid)

  maidArr.push(maid);
  console.log('added to array...', maidArr)

  const strMaidBot = JSON.stringify(maidArr);
  localStorage.setItem("maidArr", strMaidBot);
  console.log('maidArr as string...', strMaidBot)

  maidArr.forEach(function (element) {
    console.log('current robot obj:', element)
    document.querySelector(`.profile`).innerHTML += `
    <img src='${element.image}'/>
    <div class="txt">
        <h2 class="">${element.name}</h2>
        <p class="">${element.name} is ${element.job}'s bot maid.</p>
    </div>`;
  });

  const maidStr= JSON.stringify(maidArr)
  localStorage.setItem(`maidArr`, maidStr)
  const gotMaidStr = localStorage.getItem(`maidArr`)
  const convertedMaid = JSON.parse(gotMaidStr)
}