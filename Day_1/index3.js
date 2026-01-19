/*
Variable shadowing - In js varaible shadowing happens when the variable is redeclared inside
the scope and has same name as the outer varialbe.

We can shadow a var variable by using the let but cannot shadow a let by var
*/

function test(){
    var a = 30

    if(true){
        let a = 90
        console.log(a); // -> Here variable shadowing is done
        
    }
    console.log(a); // -> as a is let we cannot access it outside hence global value is used
    
}

test()