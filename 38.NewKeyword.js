var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is:${this.courseCount}`);
    }
};
// var Jagadeesh = User("Jagadeesh",2);
var Jagadeesh = new User("Jagadeesh",2);
console.log(Jagadeesh)

var sam = new User("Sam",1);
console.log(sam)