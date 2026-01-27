// Promise was introduced to solve 2 major problems of cb's
// 1. The callback hell
// 2. Inversion of control - Passing a callback to another function.
//Promise - In js , promise is an object mainly used to handle the asynchronous operation. It mainly represents the values which will be avaialable in the future. A promise initially is in the pending state and then it is fullfilled with a value or reject by the error. 
// We can consume a promise using a then() function for success and catch for failure or error.
// Example of a promise considering an ecommerce 

const cart = ["shirt","pant","shoes"]


// This function returns a promise
const promise = createOrder(cart)


// when a promise is resolved
promise.then((orderId)=>{
    console.log(orderId);
    return orderId // this is very importand to return as it is going to be used by another promise
})
.then((orderId)=>{
    return proceedToPayment(orderId)
})
.then((paymentinfo)=>{
    console.log(paymentinfo);
})
.catch((err)=>{
    console.log(err.message);
})

// when a promise is rejected and will handle failure of all the promises
.catch((err)=>{
    console.log(err.message); 
})

function createOrder(cart){
    const pr = new Promise((resolve,reject)=>{
        if(!validatecart(cart)){
           const err = new Error("Cart is not valid") 
           reject(err)
        }
        const orderId = 12345
        resolve(orderId)
    })

    return pr
}

function validatecart(cart){
    return true
}

function proceedToPayment(orderId){
    const promise = new Promise((resolve,reject)=>{
        resolve("Payment was successful");
    })
    return promise
}