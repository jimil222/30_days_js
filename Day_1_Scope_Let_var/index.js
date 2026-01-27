// Scope

/*So the scope in js is the area of the region where the 
variables can be accessd
There are mainly 4 types of scopes in js
*/

// 1. Global scope - Accessible everywhere
// eg 

var x = 20 

function demo(x){
    console.log(x);
}

demo(x)
console.log(x);


// // 2. Function scope - accessed inside the function

function demo2(){
    var a = 20
    
    console.log(a);
}

demo2()
console.log(a); // we cannot access 

// 3. Block scope 

{
    var a = 10
    var b = 20 
    
    console.log(a,b)
}
console.log(a,b) // we cannot access here

// 4 . Lexical scope - Inner functions can access the outer function variables

var a = 30
function outer(){
    var a = 20
    function inner(){
        console.log(a)
    }
    inner()
}

outer()

