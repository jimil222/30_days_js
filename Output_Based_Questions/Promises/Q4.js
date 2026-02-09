function job(){
    return Promise.reject("Rejected")
}

let promise = job(); 
promise
  .then(() => console.log("Success 1"))
  .then(() => console.log("Success 2"))
  .then(() => console.log("Success 3"))
  .catch(() => console.log("Error 1"))
  .then(() => console.log("Success 4"));

// here the success 4 is printed along with the error 1 as we are not throwing any error due to which catch is returing a new promise in this way 
// .catch(() => {
//   console.log("Error 1");
//   return undefined; // resolved promise
// });
