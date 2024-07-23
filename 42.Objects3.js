var User = {
    name: "",
    getUserName:function (){
        console.log(`User name is : ${this.name}`)
    }
};


var Jagadeesh = Object.create(User);
console.log(Jagadeesh)
Jagadeesh.name = "Jagadeesh";
Jagadeesh.getUserName();

var sam = Object.create(User,{
    name:{
        value:"Sam"
    },
    courseCount:{value:3}
})
sam.getUserName();