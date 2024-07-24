var returned = Math.max(2,5,7,8,98,9)
console.log(returned)

var myObj = {}
Object.assign(myObj,{a:1,b:2,c:3},{z:9,y:8,x:7})
console.log(myObj)

function sumOne(a,b){
    return a+b;
}
var myAr = [2,3]
// console.log(sumOne(myAr))
// console.log(sumOne(...myAr))//Spread Operator
// console.log(sumOne(2,3))
function sumTwo(a,b,...args){
    // // console.log(args)//paases as an array
    // let multi = a*b;
    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    return sum;
    // return [sum,multi];
}
console.log(sumTwo(2,3))
console.log(sumTwo(2,3,54,6,5))