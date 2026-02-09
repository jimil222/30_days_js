console.log("Start")

const p = new Promise((resolve,reject)=>{
    console.log(1);
    resolve(2);
})

p.then((val)=>{
    console.log(val); 
})

console.log("End");

// Output is ->
// start 
// 1 
// end 
// 2

// As js executes the synchronous code first
