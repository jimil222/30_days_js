function change(person){
    person.age = 30;
    person = {
        name: "Jimil",
        age : 20
    }
    return person
}

const obj1 = {
    name : "John",
    age : 13
}

const person2 = change(obj1)
console.log(person2); // this prints the new object
console.log(obj1); // this mutates the original one