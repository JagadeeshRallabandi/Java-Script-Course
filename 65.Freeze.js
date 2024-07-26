const student ={
    age:44,
    name:{
        firstname:"Jagadeesh",
        lastname:"Rallabandi",
    },
};

student.age = 19;
console.log(student);
Object.freeze(student);
student.age = 20;
console.log(student);
student.name.firstname = "Not Jagadeesh";
console.log(student);