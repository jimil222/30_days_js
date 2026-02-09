const value = {
    number : 10
}

const multiply = (x = {...value})=>{ // default val is provided by cloning above 10
    console.log((x.number*2));
    
}

console.log(multiply()); // here its not refering the orig objects its cloning new so 20
console.log(multiply()); // same here 20
console.log(multiply(value)); // but now we are passing the object to it and its changing it now number : 20 in the value object
console.log(multiply(value)); // 40
