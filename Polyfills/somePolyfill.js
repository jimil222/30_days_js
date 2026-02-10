Array.prototype.mySome = function(cb){
    
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            return true
        }
    }
    
    return false
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.mySome(elem => elem > 4));
