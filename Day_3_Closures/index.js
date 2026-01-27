// Lexical Environment and closures


function a(){
    var b = 10;
    function c(){
        console.log(b); 
    }
    c()
}

a()

// here we will see how the js works in the browser so when the program is not started even executing a global execution context gets created. After this whenever a function is invoked then another ec is context is created for the function itself. 
// So here the when we log b inside c first the js finds c in the local scope where it cannot find b. So it goes to its lexical scope which is the parent and its a(). There it finds and hence it logs 10 
// Each execution context has memory and a lexical scope of its parent. refer the figure to get more idea.

// Closure - Closure is a function binded with the lexical scope of its parent
// The above function is a very simple example of a closure but lets see some other eg 

function x(){
    var n = 100
    function y(){
        console.log(n);
    }
    return y
}

// Normally when the function is called the ec is removed -> x is called it returns y and the ec of x is removed when the function finishes the execution and we lost n but y is binded with x and hence we get 100 again
var z = x()
z() // But still here we get 100 why , because the y remembers the binding with the parent and remembers from where it came.




