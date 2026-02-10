Array.prototype.myEvery = function(cb){
    
    for(let i=0;i<this.length;i++){
        if(!cb(this[i],i,this)){
            return false
        }
    }
    
    return true
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.myEvery(elem => elem > 4));
