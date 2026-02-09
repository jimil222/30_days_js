// Working of fetch in js 
// fetch works in the follwing way 
// 1. Fetch returns a promise in the form of a response object containing the readablestream . 
// 2. In order to access the data we need to convert the readablestream into the json which again returns a promise we need to fullfill that and then we can log the data in the console

async function getdata() {
    const response = await fetch("https://api.github.com/users/jimil222")
    const data = await response.json()
    console.log(data);
}
getdata()