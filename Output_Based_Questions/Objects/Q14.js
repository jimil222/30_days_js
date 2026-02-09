// What is shallow and deep copy in js  

//A shallow copy creates a new object or array but only copies the top-level properties. Any nested objects or arrays still point to the same memory locations as the original

const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
shallowCopy.b.c = 5; 
// console.log(original.b.c); // Output: 5 (Original is affected)


// A deep copy creates a completely new, independent copy of the original object and all its nested structures recursively. This ensures that modifications made to the deep copy do not affect the original object. 

const original2 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 5;
console.log(original2.b.c); // Output: 2 (Original remains unchanged)



