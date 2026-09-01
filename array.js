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
// .length will return the number of items in that array. it starts its count from 1.
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

// reverse, sort , slice, splice

console.log("this is reversed:", students.reverse()); //This flips the arrray in the opposite direction
console.log("this is sorted:", students.sort()); //this arranges the array in alphabetical order

console.log("This is sliced:", students.slice(1, 3)); //returns a new array with the sliced elements
console.log("This is spliced:", students.splice(1, 2, "Mohh", "Esther")); //removes the elements from the array and returns

console.log("This is the array", students);

//Higher order array methods: a function that accepts another function(call back function) as a parameter/argument
//map, filter, reduce, forEach, find, findIndex, some, every

//call back function is a function that performs an operation on each element in the array or 

//map methods (it will make a new array by transforming each of the element/item in that array)

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map((num) => num * 2)
console.log(doubledNumbers);


// const double = numbers.map((num) => {
//     return num * 2;
// })

const marketList = ["rice", "beans", "garri", "yam", "plantain"]
const addedPrefix = marketList.map((item)  => `i will buy plenty: ${item}`)

console.log(addedPrefix);

//filter methods: they return items that matches a condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const complexion = ["dark", "fair", "medium", "dark", "fair"]
const darkComplexion = complexion.filter((item) => item === "dark")
console.log(darkComplexion);

//Find methods: This will return the first value matching a condition
const findFirstDark = complexion.find((item) => item === "dark")
console.log(findFirstDark);

//Find index: This tells the index position of the first matching item we seek
// if the value doesn't exist, it will return -1

const findIndexofDark = complexion.findIndex((item) => item === 'fair')
console.log(findIndexofDark);

//reduce method: looks through an array and combines all elements in the array into a final value.
// compress it all into one value. 

const nums =[700, 300, 500, 1000, 2000]
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum);

const multiply = nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
console.log(multiply);

