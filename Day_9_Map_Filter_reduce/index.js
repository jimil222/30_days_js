const arr = [1,2,3,4,5]

const multwo = arr.map((elem, i , arr)=>{
    return elem * 2
})

console.log(multwo);

const moretwo = arr.filter((elem, i , arr)=>{
    return elem > 2
})

console.log(moretwo);

const sum = arr.reduce((prev,curr,i,arr)=>{
    return prev + curr
},0)

console.log(sum);
