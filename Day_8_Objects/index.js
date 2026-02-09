const user ={
    name : "Jimil",
    age : 21
}


// user.age = 20
// delete user.age
console.log(user);


// Adding values to the object dynamically 
const property = "firstName"
const value = "Jimil"
const obj = {
    [property] : value
}

console.log(obj);
console.log(obj[property]);

const obj2 = {
    name : "",
    age : ""
}

const name="Jim";
const age=21;

function addval(key,val){
    obj2[key] = val
}

addval("name",name)
addval("age",age)

console.log(obj2);

//Looping through the key and values of an object 

for(key in obj2){
    console.log(key+":"+obj2[key]);  
}

