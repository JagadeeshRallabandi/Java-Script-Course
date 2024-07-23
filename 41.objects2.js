var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is:${this.courseCount}`);
    }
};
User.prototype.getFirstname= function(){
    console.log(`First Name is:${this.firstName}`)
}
// var Jagadeesh = User("Jagadeesh",2);
var Jagadeesh = new User("Jagadeesh",2);
Jagadeesh.getCourseCount();
// console.log(Jagadeesh)

var sam = new User("Sam",1);
// console.log(sam)
sam.getCourseCount();
sam.getFirstname()
Jagadeesh.getFirstname()
if(Jagadeesh.hasOwnProperty("firstNamee")){
    Jagadeesh.getFirstname();
}