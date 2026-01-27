// So Suppose we have to print 1->5 after each sec 1->1sec, 2->sec and so on
// we start with a loop and then print then use settimeout like this 


for(var i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}
// why are we getting 6 all time -> because 'i' is pointing to the same reference

// Solution to this is simply use let instead of var so each time new copy of i is used as let is blocked scoped
// But still this can be done using var itself

for(var i=1;i<=5;i++){
    function close(x){
        setTimeout(function(){
            console.log(x);
        }, x*1000);
    }
    close(i) // Here each time the function runs a new copy of i is passed to it.
}