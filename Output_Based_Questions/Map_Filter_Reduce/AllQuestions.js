// Return a new array containing only the names in uppercase
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

const names = students.map(stud=>stud.name.toUpperCase())
console.log(names);

const studs = students.filter(stud=>stud.marks>60)
console.log(studs);

const sum = students.reduce((acc,curr)=>acc+curr.marks,0)
console.log(sum);

const nameonly = students.filter(stud=>stud.marks>60).map(stu=>stu.name)
console.log(nameonly);

const totalMarks = students.map((elem)=>{
    if(elem.marks<60){
        elem.marks+=20
    }
    return elem
}).filter(stu=>stu.marks>60)
.reduce((acc,curr)=>acc+curr.marks,0)

console.log(totalMarks);

