// There are mainly 4 promise api's in js 
// 1. Promise.all - It is used when we have to make multiple api calls simulataneously. This takes array of promises and then returns the single promise.
// Imp - 
// 1.It waits for all the promises to finish executing before giving the result
// 2. If anyone of the promise fails then it will throw the error as its result.
// For eg there are three promises [p1,p2,p3] and takes time [1,2,3] then if 1 fail after one second then it will return error in one sec without waiting for other promises to get executed.
// Overall it gives collective result if all succeed -> result else error

// Eg for promise.all()

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const err = new Error("error")
//         reject(err)
//         // resolve("This is the result of the first promise")
//     }, 1000);
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("This is the result of the second promise")
//     }, 3000);
// })

// Promise.all([promise1,promise2]).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.error(err);
// })

// 2. Promise.allSettled([]) - What if we want want until all promises are settled even if one of them fails. In this case we can use Promise.allSettled.

// Eg - 

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const err = new Error("error")
//         reject(err)
//         // resolve("This is the result of the first promise")
//     }, 1000);
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("This is the result of the second promise")
//     }, 3000);
// })

// Promise.allSettled([promise1,promise2]).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err.message);
// })


// 3. Promise.race - This api prints the result of the first settled promise.

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // const err = new Error("error")
        // reject(err)
        resolve("This is the result of the first promise")
    }, 6000);
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("This is the result of the second promise")
    }, 3000);
})

Promise.race([promise1,promise2]).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err.message);
})

// 4. Promise.any[] - This is very similar to race but it waits for the first success. If all the promises get rejected then it gives us an aggregated error.