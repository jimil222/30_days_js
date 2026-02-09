console.log("Start")

const p = new Promise((resolve,reject)=>{
    console.log(1);
    console.log(3);
})

p.then((val)=>{
    console.log(val); 
})

console.log("End");

// Output is ->
// start 
// 1 
// 3 
// end

// if no resolve then .then is not executed
