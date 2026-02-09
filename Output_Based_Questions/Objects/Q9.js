// What is destructuring in js

const obj = {
    name : "Jimil",
    lastname : "Soni"
}

const name = "Soham" // if we want to rename the destructured key
// const {name} = obj
const {name:myName} = obj

// console.log(myName);

// Now we can extract the nested obj properties in this way

const obj2 = {
    name : "Jimil",
    lastname : "Soni",
    education : {
        BE : "MMCOE",
        Diploma : "AISSMS"
    }
}

const {education:{BE,Diploma}} = obj2 // we use the property name followed by the brackets to destructure it

console.log(BE);
console.log(Diploma);


