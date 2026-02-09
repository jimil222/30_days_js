// Rewrite the below code using async await 

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

async function loadJson(url){
    try {
        let response = await fetch(url);
        if(response==200){
            const data = await response.json()
            return data
        }else{
            throw new Error(response.status)
        }
        
    } catch (error) {
        console.log(error);
    } 
    
}

loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);



