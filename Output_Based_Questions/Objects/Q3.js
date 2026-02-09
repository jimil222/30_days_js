const a = {}
const b ={key:"b"}
const c ={key:"c"}

a[b] = 123
a[c] = 456
console.log(a[b]);

// why we get 456 and not 123

// first when we do a[b] , so b = {key:"b"} which when converted to a string becomes 
// ["[object Object]"], later we are again modifying it by c so again overlaps the value like this ["[object Object]"] = 456
