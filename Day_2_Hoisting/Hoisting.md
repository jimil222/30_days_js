Summary of function hoisting 

so when we write the function normally its hoisted normally , means 
it stored as a copy in the browser 
if we call it we get the return value ✅
if we print it we get the function

But this behaves differently with an arrow function , means its hoisted 
as the variables in the browser
if we call it we get an error ‼️
if we print it if gives us undefined (if the type is let the we again get error)