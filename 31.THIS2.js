console.log(this)
var user = {
    firstName: 'Jagadeesh',
    courseCount:4,
    getCourseCount: function(){
        console.log("Line7",this)
        function sayHello(){
            console.log("Line8",this)
        }
        sayHello();
    }

}
user.getCourseCount();
function sayHello(){
    console.log("Hello")
}
sayHello();