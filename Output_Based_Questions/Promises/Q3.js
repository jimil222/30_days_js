console.log("Start");

const fn = ()=>
    new Promise((resolve,reject)=>{
        console.log(1);
        resolve("success")
    })


console.log("middle");

fn().then((res)=>{
    console.log(res);
})


console.log("End");


// function is called after the middle block