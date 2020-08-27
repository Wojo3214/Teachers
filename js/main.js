/*
 Array of teachers
*/
let teachers = [
  {
    name: 'Birgitte',
    initial: 'bki',
    mail: 'bki@baaa.dk',
    phone: '+4572286316',
    position: "Senior lecture",
    img: 'https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg'
    
  },

  {
    name: 'Rasmus',
    initial: 'race',
    mail: 'race@baaa.dk',
    phone: '+4572286318',
    position: "Lecture",
    img: 'https://www.eaaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335324630000&format=webp'
  },

  {
    name: 'Morten Algy Bonderup',
    initial: 'moab',
    mail: 'moab@baaa.dk',
    phone: '+4572286339',
    position: "Senior lecture",
    img: 'https://www.baaa.dk/media/hi4lv5hw/morten-bonderup.jpg?anchor=center&mode=crop&width=400&height=225&rnd=132301335308630000'
  
  }
];


/*
Appends data to the DOM
*/
function appendTeachers(teachers){
  let htmlTemplate = '';
  for (let teacher of teachers) {
    htmlTemplate += /*html*/ 
    `
      <article>
        <img src="${teacher.img}" alt="${teacher.name}">
        <h3>${teacher.name}</h3>
        <span class="initial">Initial: ${teacher.initial}</span>
        <p>Position: ${teacher.position}</p>
        <a href="mailto: ${teacher.mail}">${teacher.mail}</a>
        <a href="tel: ${teacher.phone}">${teacher.phone}</a>
      </article>
    `;
  }
  document.querySelector("#teachers").innerHTML = htmlTemplate;

}

appendTeachers(teachers);

/*
Search functionality: find objects by given searchValue
*/
function search(searchValue) {
  console.log(searchValue);

  let searchedTeacher = [];

  for (let teacher of teachers){
    let name = teacher.name.toLowerCase();

    if(name.includes(searchValue.toLowerCase())){
      searchedTeacher.push(teacher);
    }
  }

  console.log(searchedTeacher);

  appendTeachers(searchedTeacher);
 


  // TODO: implement search functionality
}

/*
Adds a new object to the array familyMembers 
*/
function add() {
  console.log("Add button clicked");

  let inputName = document.getElementById('inputName').value;
  let inputInitial = document.getElementById('inputInitial').value;
  let inputEmail = document.getElementById('inputEmail').value;
  let inputPhone = document.getElementById('inputPhone').value;
  let inputPosition = document.getElementById('inputPosition').value;
  let inputImageUrl = document.getElementById('inputImageUrl').value;

  inputPhone.trim();

  let createNewTeacher = {
    name: inputName,
    initial: inputInitial,
    mail: inputEmail,
    phone: inputPhone,
    position: inputPosition,
    img: inputImageUrl
  }

  //add new teacher to array
  teachers.push(createNewTeacher);

  //reset grid
  document.querySelector("#teachers").innerHTML='';

  appendTeachers(teachers);
  // TODO: implement add functionality
}