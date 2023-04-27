const aNameTeach = localStorage.getItem(`aNameT`);
const aJobTeach = localStorage.getItem(`aJobT`);
const aImageTeach = localStorage.getItem(`aImageT`);


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

  const aNameTeach = document.querySelector(`.aNameT`).value;
  const aJobTeach = document.querySelector(`.aJobT`).value;
  const aImageTeach = document.querySelector(`.aImageT`).value;
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
        <p class="">${element.name}'s job is to teach ${element.job}. </p>
    </div>`;
  });

  const teacherStr= JSON.stringify(teacherArr)
  localStorage.setItem(`teacherArr`, teacherStr)
  const gotTeacherStr = localStorage.getItem(`teacherArr`)
  const convertedTeacher = JSON.parse(gotTeacherStr)
}
