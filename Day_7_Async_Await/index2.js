// Here we will cover some complex examples of the async and await 

const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 10000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 5000);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 5000);
})

const p4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 10000);
})

// Here some complex scenarios of promises are resolved
// Here everything gets printed in same sequence after 10s as promise 1 takes 10s and other one 5s

async function getdata(){
    console.log("Hello world");
    const res = await p1
    console.log("Wait1");
    console.log(res);
    const re2 = await p2
    console.log("Wait2");
    console.log(re2);
    console.log("End");
    
}

// getdata()

// Here there is other scenario is handled where after 5s first promise is fullfilled and later after 10s the second one is fullfilled
async function getdata2(){
    console.log("Hello world");
    const res = await p3
    console.log("Wait1");
    console.log(res);
    const re2 = await p4
    console.log("Wait2");
    console.log(re2);
    console.log("End");
    
}

// getdata2()



// How async await works so when the promise is encountered the function execution is suspended and then function is popped out of the stack and then when the promise is resolved then again the function comes into the stack and prints the value


