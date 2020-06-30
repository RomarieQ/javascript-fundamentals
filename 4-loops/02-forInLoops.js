let student = {
    name: "Gloria", 
    awesome: true,
    specialty: "JavaScript",
    week: 1
};

console.log(student.name);
console.log(student['awesome']);

for (x in student) {
    console.log(student[x]);
}

console.log(typeof x);


// For-in-loop will return to you the KEYS of some collection (everything is an object (key value pair))
// For-of-loop only works with collections that are ordered (iterable key or flag)