// Js is single threaded means it executes the code one by one and also it can do one task at a time. Js can quickly execute all the synchronous tasks
// So for the asynchronous tasks (asynchronous) js uses event loop.

// Js also makes use of a call stack in order to execute the code which is present in the js engine
// Also web apis are used to acces browsers functionalities like localstorage settimeout etc.

// Following are some of the examples of event loop 
// Js executes everything using a callstack and firstly the global execution context is created
// First line goes into the stack and the stack quickly executes it
// Then comes the second part where there is the timer so the callback is taken and paused till the timer completes 
// By that time the third lines is executed by putting in the stack
// Once the timer is finished the cb needs to push into the stack to execute it.Here the cb queue and the event loop comes into the picture
// But before that the cb is pushed into the callback queue. Then the event loop takes the cb from the queue and pushes into the stack in order to execute it.
// The stack quickly executes the cb.

console.log("Start"); // Proivded by the web apis

setTimeout(() => {
    console.log("Timer finished");
}, 5000);

console.log("End");

// Due to the above scenario we get the o/p as start -> end -> timer finished

// Another example to understand another queue called microtask queue 
// So all the above process works the same but for the fetch the callback gets pushed in the micro task queue instead of the callback queue and they have higher priority of getting executed.
// (all the cb functions which comes through the promises and the mutation observer (a built-in object that allows you to monitor for changes (mutations) in the DOM (Document Object Model) tree and fires a callback function in response to those changes.) goes to this queue)

console.log("Start"); // Proivded by the web apis

setTimeout(() => {
    console.log("Timer finished");
}, 5000);


fetch("https://fakestoreapi.com/products")
.then(function cb(){
    console.log("This is from the fetch");
    
})

console.log("End");
