// what is json.stringfy and json.parse

const obj = {
    name : "Piyush",
    age:24
}
const strObj = JSON.stringify(obj)
console.log(strObj);
console.log(JSON.parse(strObj));
