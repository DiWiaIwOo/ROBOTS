const aNameTeach = localStorage.getItem(`aName`);
const aJobTeach = localStorage.getItem(`aJob`);
const aImageTeach = localStorage.getItem(`aImageTeach`);
// document.querySelector(`.aNameTeach`).innerText = aNameTeach;


// Create class for Teacher  Robot (lesson9)
// Refactor createBot() to make  object from class (lesson9/10)
// push  to array for teacherrobots (lesson10)
// save to localstorage (lesson11)

class Teacher {
  constructor(name, job, image) {
    this.name = name;
    this.job = job;
    this.image = image;
  }
}

const teacherArr = [];

function createBot() {
  console.log('creating robot...')
  document.querySelector('.profile').innerHTML = '';

  const aNameTeach = document.querySelector(`.aName`).value;
  const aJobTeach = document.querySelector(`.aJob`).value;
  const aImageTeach = document.querySelector(`.aImage`).value;
  const teacher = new Teacher(aNameTeach, aJobTeach, aImageTeach);
  console.log('created robot...',  teacher)

  teacherArr.push(teacher);
  console.log('added to array...', teacherArr)

  const strTeachBot = JSON.stringify(teacherArr);
  localStorage.setItem("teacherArr", strTeachBot);
  console.log('teacherArr as string...', strTeachBot)

  teacherArr.forEach(function (element) {
    console.log('current robot obj:', element)
    document.querySelector(`.profile`).innerHTML += `
    <img src='${element.image}'/>
    <div class="txt">
        <h2 class="">${element.name}</h2>
        <p class="">${element.job}</p>
    </div>`;
  });

  const teacherStr= JSON.stringify(teacherArr)
  localStorage.setItem(`teacherArr`, teacherStr)
  const gotTeacherStr = localStorage.getItem(`teacherArr`)
  const convertedTeacher = JSON.parse(gotTeacherStr)
}
