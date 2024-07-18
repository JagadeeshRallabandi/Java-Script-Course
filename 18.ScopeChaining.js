var name="Jagadeesh"
console.log("Line number 3",name);

function sayName(){
    console.log("Line number 6",name);
}
sayName();

function sayName2(){
    var name="Jagadeesh10"
    console.log("Line number 10",name)
    sayNameTwo();
    function sayNameTwo(){
        console.log("Line number 13",name)
    }
}
sayName2();