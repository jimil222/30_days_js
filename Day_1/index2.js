// let var and const 

/*
 var - var is old js variable and it is 
 function scoped 
 we can redeclare and reassign it
 It has no block level scope

*/ 

var a = 10
var a = 30 
x=40

console.log(a);

{
    var x = 90
}

console.log(x); // -> Still accessible so can cause bugs


/*
 let - let was introduced in es6
 it is block scoped 
 we can reassign the value to let but cannot redeclare it
*/ 

let b = 100
b = 90 

console.log(b);

{
    let vari = 70
}

console.log(vari); //-> we cannot access it here


/*
 const - const is the most strict as compared to both
 it is block scoped 
 we cannot reassign and cannot redeclare it
*/ 

const elem = 40 
elem = 30 // -> cannot reassign the value

console.log(elem);





