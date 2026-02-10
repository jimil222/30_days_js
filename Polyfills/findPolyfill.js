Array.prototype.myFind = function(cb){
    let elem = undefined
    
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            elem = this[i]
            break
        }
    }
    
    return elem
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.myFind(elem => elem > 6));
