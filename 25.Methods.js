var user ={
    firstName:"Hitesh",
    lastName:"Choudary",
    role : "Admin",
    loginCount: 32,
    facebookSignedIn:true,
    courseList:[],
    buyCourse:function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount:function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};
console.log(user.firstName)
var courseList=true;
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular JS Course");
console.log(user.getCourseCount())
