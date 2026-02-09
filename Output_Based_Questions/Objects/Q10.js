const a = {
    a:10,
    b:20
}

const b = a 
b.a = 30 // this change is done in both object as we are directly providing the reference

console.log(a); 
