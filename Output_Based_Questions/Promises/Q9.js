// Call the promises recursively

function demo1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Demo 1 called")
        },1000)
    })
}
function demo2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Demo 2 called")
        },1000)
    })
}
function demo3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Demo 3 called")
        },1000)
    })
}


function exeprom(funcprom){
    if(funcprom.length==0) return;

    const curr = funcprom.shift()

    curr.then((data)=>{
        console.log(data);   
    })
    .catch((err)=>{
        console.log(err);
    })

    exeprom(funcprom)
}

exeprom([
    demo1(),
    demo2(),
    demo3(),
])