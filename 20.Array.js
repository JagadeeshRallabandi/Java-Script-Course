var countries = ["INDIA","USA","JAPAN","RUSSIA"];
var cities = new Array("MUMBAI","NEW YORK","TOKYO","MOSCOW");
// var cities = ["DELHI","NEW YORK","TOKYO","MOSCOW"];
console.log(cities[1]);
console.log(cities.length)
console.log(cities)
cities[0]="DELHI";
console.log(cities)
var user = ["Jagadeesh","Jagadeesh@impressico.com",3,34,true]
console.log(user)
user.pop();
user.pop();
console.log(user)
user.unshift("New Value");
console.log(user)
user.shift()
console.log(user)
console.log(user.indexOf(3))
console.log(user.indexOf("newyy"));
console.log(Array.from("Jagadeesh"))