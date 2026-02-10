// condition for map 
// mapp = arr.map((elem,i,arr)=>{})

Array.prototype.myMap = function(cb){
    const temp = []
    for(i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
    
}

const arr = [1,2,3,4,5]

const moretwo = arr.myMap((elem,i,arr)=>{
    return elem * 2
})

console.log(moretwo);
