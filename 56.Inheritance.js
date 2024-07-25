class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    courseList=[];
    getInfo(){
        return {name:this.name,email:this.email,courseList:this.courseList};
    }
    enrollCourse(name){
        this.courseList.push(name)
    }
    getCourseList(){
        return this.courseList;
    }
    static login(){
        return "You are loggedin"
    }
}
class SubAdmim extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "I am SubAdmin"
    }
    login(){
        return "You are loggedin as SubAdmin"
    }
}

module.exports = User;

// const rock = new User("rock","rock@rock.com")
// console.log(rock.getInfo());
// rock.enrollCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList);


const tom = new SubAdmim("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
