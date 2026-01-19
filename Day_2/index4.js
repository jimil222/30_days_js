//1. Hoisting - So in js hoisting is a process where the js engine takes the variables and functions at the top of the code during the execution phase eg - 

console.log(a); // variable existed during the creation phase and hence we get undefined
var a = 10

//2. This thing works something differently with let and const there the variables are hoisted but instead of getting undefined we get an error , they are hoisted in the temporal dead zone.Temporal dead zone is a time where the let and const existed in their scope but they cannot be accessed.


//2. This same thing happens with a function suppose we decalre and write a function here 
getName()
console.log(getName); // Here the copy of the function is stored in the browsers global scope due to which we get undefined and if we call it we get the return value

function getName(){
    console.log("This is the getname function");
    
}

//3. But this thing works differently in case of an arrow function they are hoisted as the variables they are hoisted as undefined due to which we get undefined and if we call it we get a warning
getName2() // here we get a warning as its stored 
// console.log(getName2);// This will print undefined and in case of let and const it give error
var getName2=()=>{
    console.log("This is the other getname function");
    
}


