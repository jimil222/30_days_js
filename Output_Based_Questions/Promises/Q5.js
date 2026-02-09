function job(state){
    return new Promise((resolve,reject)=>{
        if(state == true){
            resolve("success")
        }
        else{
            reject("error")
        }
    })
}

let promise = job(true)

promise.then((data)=>{
    console.log(data);
    return job(false)
})
.catch((err)=>{
    console.log(err);
    return "Error caught"
})
.then((data)=>{
    console.log(data);
    return job(true)
})
.catch((error)=>{
    console.log(error);
})


// sucess
// defeat 
// success
// success
// 