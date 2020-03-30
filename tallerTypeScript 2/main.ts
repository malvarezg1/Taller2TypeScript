import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import{Student} from './student.js';


let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('student')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;
const inputMaxBox: HTMLInputElement = <HTMLInputElement> document.getElementById("max-box")!;
const inputMinBox: HTMLInputElement = <HTMLInputElement> document.getElementById("min-box")!;

btnfilterByName.onclick = () => {applyFilterByName();}

renderCoursesInTable(dataCourses);
renderStudentInTable();


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
    let  trElement = document.createElement("tr");
    let creditos: number = getTotalCredits(courses);
    trElement.innerHTML = `<td colspan="3"> <strong>Creditos totales: ${creditos} <\strong></td>`;;
    coursesTbody.appendChild(trElement);
}

function renderStudentInTable(): void {
  console.log('Desplegando estudiante');
  let estudiante = new Student(201630449,1020832288,21,3187071575,"Cra 6 # 125 -20");
  console.log(estudiante);
  let trElement = document.createElement("tr"); 
  trElement.innerHTML = `<td>Código</td>
                         <td>${estudiante.codigo}</td>`;
                         studentTbody.appendChild(trElement);
  trElement = document.createElement("tr"); 
  trElement.innerHTML = `<td>Cédula</td>
                         <td>${estudiante.cedula}</td>`;
  studentTbody.appendChild(trElement);
  trElement = document.createElement("tr"); 
  trElement.innerHTML = `<td>Edad</td>
                          <td>${estudiante.edad}</td>`;
  studentTbody.appendChild(trElement);
  trElement = document.createElement("tr"); 
  trElement.innerHTML = `<td>Telefono</td>
                         <td>${estudiante.telefono}</td>`;
studentTbody.appendChild(trElement);
trElement = document.createElement("tr"); 
trElement.innerHTML = `<td>Dirección</td>
                        <td>${estudiante.direccion}</td>`;
studentTbody.appendChild(trElement);
}


function applyFilterByName() { 
  let text = inputSearchBox.value;
  let max = inputMaxBox.value;
  let min = inputMinBox.value;
  max = (max == null) ? '': max;
  min = (min == null) ? '': min;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(max, min ,text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(max: string, min :string,nameKey: string, courses: Course[]) {
  return max  === '' && min === '' && nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey) && c.credits >= parseInt(min) && c.credits <= parseInt(max));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}