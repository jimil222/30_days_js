// Call the second promise using the first one and then pass the result to the first one 

const firstp = new Promise((resolve,reject)=>{
    resolve("first")
})

const secondp = new Promise((resolve,reject)=>{
    resolve(firstp)
})

secondp.then((val)=>{
    return val
}).then((data)=>{
    console.log(data);
})