// const user = ["Jagadeesh",3,"Admin"];
// // var role = user[2];
// // var name = user[0];
// var [name, courseCount, role]=user;
// console.log(role)

const MyUser = {
    name: "Jagadeesh",
    courseCount: 3,
    role:"admin"
};
console.log(MyUser.courseCount);

const {name,mycourseCount,role}=MyUser;
console.log(mycourseCount)