// Async await is the modern way of writing the promises in js. Main difference between the modern async await and the .then is that the async await pause the execution of the program unless the promise is settled where as .then doesnot wait below is the example for both

const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise resolved")
    }, 5000);
})

async function withasyc(){
    console.log("Start");
    const val = await p;
    console.log(val);
    console.log("End");
}

// withasyc() 

// this prints in this way.
// Start -> Promise resolved -> End

function woasync(){
    console.log("Start");
    p.then((val)=>{
        console.log(val);
    })
    console.log("End"); 
    
}

// woasync()

// this prints in this way.
// Start -> End -> Promise resolved
// Here the lines below the await are paused until the response comes


