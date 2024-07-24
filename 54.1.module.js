// import User from "54.Classes.js";

const User = require("C:\\Users\\rjaga\\Desktop\\JS\\54.Classes.js")
const Jagadeesh  = new User("Jagadeesh","rjagadeesh@gmail.com");
console.log(Jagadeesh.getInfo());
Jagadeesh.enrollCourse("React BootCamp");
Jagadeesh.enrollCourse("Angular Bootcamp");

console.log(Jagadeesh.getCourseList())

let courses = Jagadeesh.getCourseList();
courses.forEach((c)=>console.log(c));