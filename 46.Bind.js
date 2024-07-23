const Jagadeesh = {
    firstName :"Jagadeesh",
    lastName:"Rallabandi",
    role:"Admin",
    corseCount:3,
    getInfo : function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studying ${this.courseCount} courses
            `);

        }

};



const dj = {
    firstName:"Rock",
    lastName:"DJ",
    role:"Admin",
    courseCount:4,
};

// Jagadeesh.getInfo();
// dj.getInfo();
Jagadeesh.getInfo.bind(dj);
Jagadeesh.getInfo.call(dj)