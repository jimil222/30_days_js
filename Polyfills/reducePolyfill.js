// condition for reduce 
// const sum = arr.reduce((prev,curr,i,arr)=>{
//     return prev + curr
// },0)

Array.prototype.myReduce = function(cb,initialvalue){
    let acc = initialvalue;

    for(let i=0;i<this.length;i++){
        acc = acc?cb(acc,this[i],i,this):this[i]
    }

    return acc
    
}

const arr = [1,2,3,4,5]

const sum = arr.myReduce((prev,curr,i,arr)=>{
    return prev + curr
},0)

console.log(sum);
