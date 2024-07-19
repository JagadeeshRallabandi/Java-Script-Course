var user ={
    firstName:"Hitesh",
    lastName:"Choudary",
    role : "Admin",
    loginCount: 32,
    facebookSignedIn:true
};
console.log(user.firstName);
console.log(user["lastname"])
user.loginCount=44;
console.log(user.loginCount);
console.log(user)
console.table(user)