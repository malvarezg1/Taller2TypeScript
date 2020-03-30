import { dataCourses } from './dataCourses.js';
import { Student } from './student.js';
var coursesTbody = document.getElementById('courses');
var studentTbody = document.getElementById('student');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
var inputMaxBox = document.getElementById("max-box");
var inputMinBox = document.getElementById("min-box");
btnfilterByName.onclick = function () { applyFilterByName(); };
renderCoursesInTable(dataCourses);
renderStudentInTable();
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
    var trElement = document.createElement("tr");
    var creditos = getTotalCredits(courses);
    trElement.innerHTML = "<td colspan=\"3\"> <strong>Creditos totales: " + creditos + " <strong></td>";
    ;
    coursesTbody.appendChild(trElement);
}
function renderStudentInTable() {
    console.log('Desplegando estudiante');
    var estudiante = new Student(201630449, 1020832288, 21, 3187071575, "Cra 6 # 125 -20");
    console.log(estudiante);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>C\u00F3digo</td>\n                         <td>" + estudiante.codigo + "</td>";
    studentTbody.appendChild(trElement);
    trElement = document.createElement("tr");
    trElement.innerHTML = "<td>C\u00E9dula</td>\n                         <td>" + estudiante.cedula + "</td>";
    studentTbody.appendChild(trElement);
    trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Edad</td>\n                          <td>" + estudiante.edad + "</td>";
    studentTbody.appendChild(trElement);
    trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Telefono</td>\n                         <td>" + estudiante.telefono + "</td>";
    studentTbody.appendChild(trElement);
    trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Direcci\u00F3n</td>\n                        <td>" + estudiante.direccion + "</td>";
    studentTbody.appendChild(trElement);
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    var max = inputMaxBox.value;
    var min = inputMinBox.value;
    max = (max == null) ? '' : max;
    min = (min == null) ? '' : min;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(max, min, text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(max, min, nameKey, courses) {
    return max === '' && min === '' && nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey) && c.credits >= parseInt(min) && c.credits <= parseInt(max);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
