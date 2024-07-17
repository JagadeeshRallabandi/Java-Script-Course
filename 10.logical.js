var email = true;
var facebook = false;
var google = false;
if(email){
    console.log("Login is true");
}
if(email || facebook || google){
    console.log("Login is Success");
}