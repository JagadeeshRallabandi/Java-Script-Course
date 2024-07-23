// function init(){
//     var firsName = "Jagadeesh"
//     console.log("I am Jagadeesh")
//     function sayFirstName(){
//         console.log(firsName);
//     }
//     return sayFirstName();
// }

// var value = init();
function doAddition(x){
    return function(y){
        return x + y;
    };
}

var add5 = doAddition(4)
console.log(add5(5));

doAddition(5)(6);
console.log(doAddition(5)(6));