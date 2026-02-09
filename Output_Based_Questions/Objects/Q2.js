// Create a function that multiplies all the numeric properties of an obj by 2 

const obj = {
    a:100,
    b:200,
    c:"hello"
}

for(key in obj){
    if(typeof obj[key]==="number"){
        obj[key] = obj[key] * 2
    }
}

console.log(obj);
