const shape = {
    radius : 100,
    diameter(){
        return this.radius * 2;
    },
    perimeter : ()=>{
        2*Math.PI * this.radius // this refers to the window object hence Nan or undefined
    }
}

console.log(shape.diameter());
console.log(shape.perimeter());
