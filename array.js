const arr = [1, "esther", true, [1,2,3]]
//It is a non-primitive data type that is capable of storing multiple data types.

let student1 = "sara"
let student2 ="samad"
let student3 = "Godwin"

//instead of storing multiple variables seperately, do this.

let students = ["Sara", "Samad", "Godwin", "Mohh"]
// array uses indexing: this mean it starts it count from zero(0)

console.log(students[0]);
// this displays the value in the first position
// .length will return the number of items in that array.
console.log(students.length);
students[3] = "Effiong"
console.log(students);

// adding items to an array
students.push("Ada") //adds items to the end of the array

console.log(students);

students.unshift("Uzoma") //will add items to the beginning of the array
console.log(students);

//removing elements

students.pop() //this will remove the last item in an array
console.log(students);

students.shift() //this removes the first item in an array 
console.log(students);

//includes, indexOf
console.log(students.includes("Mohh")); //this checks to see if an item exists in an array. It returns a boolean.
console.log(students.indexOf("Mohh")); //this returns -1 if the item doesn't exist

