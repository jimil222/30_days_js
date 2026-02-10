// condition for filter 
// filt = arr.filter((elem,i,arr)=>{})

Array.prototype.myFilter = function(cb){
    const temp = []
    for(i=0;i<this.length;i++){
        if(cb(this[i],i,this)) temp.push(this[i])
    }
    return temp
    
}

const arr = [1,2,3,4,5]

const moretwo = arr.myFilter((elem,i,arr)=>{
    return elem > 2
})

console.log(moretwo);
