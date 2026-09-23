// An object is a collection of related data stored as key-value pairs. 
// Think of it as a way to describe a real-world thing with multiple properties.

//Creating an object

let obj = {
    Name: "Ngozi Adeyemi",
    age: 21,
    department: "computer science",
    complexion: "dark",
    gender: "female"
}

// Acccessing values (dot notation or bracket notation)
console.log(obj.Name);
console.log(obj["age"]);

let phone = {
    brand: "samsung",
    model: "Galaxy S22",
    price: 350000
};

phone.color = "Black";
console.log(phone);

let student = {
    name: "Godwin",
    regNo: "c8/00",
    course: "Javascript",
    year: 2024,
    friends: ["Jane", "Joe", "Mary"]
}
student.gender = "Male";
console.log(student);
student.course = "Node.js";
console.log(student);
delete student.year;
console.log(student);


//Object destructuring:Destructuring is a shortcut for pulling out values from an 
//object and storing them in seperate variables.
// Instead of writing object.key many times, you extract them in one line.

let employee = {
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};

let hisName = employee.name;
let hisRole = employee.role;
let hisSalary = employee.salary;
let hisCity = employee.city

console.log(hisName);

const {name:userName, role:job, city} = employee;
console.log(employee);

//Spread and rest operators
//Spread does the expand and copy while Rest collects the remaining
//Spread opens up an array or object and spreads out its object

let DNA = {gender: "xy", 
    complexion: "dark"}

//copy and add new properties
let offspring = {
    ...DNA,
    name: "OGBU UZOMA ESTHER",
    age: 30
}
console.log(offspring);

// Iterating over objects: Unlike arrays, objects do not have a direct index. Here are
// three ways to loop through an object.

let student = { name: "Funmi", age: 20, course: "Backend Engineering"};

// 1. for...in: loops through each KEY
for (let key in student) {
    console.log(key + ": " + student[key]);    
}
// name: Funmi  | age: 20   |   course: Backend Engineering

// 2. Object.keys(): returns anarray of keys
console.log(Object.keys(student)); //["name", "age", "course"]

// 3. Object.values(): returns an array of values
console.log(Object.values(student)); //["Funmi", 20, "Backend Engineering"]

// 4. Objects.entires(): returns [key, value] pairs
console.log(Object.entries(student));







console.log(Object.keys(offspring));
console.log(Object.values(offspring));
console.log(Object.entries(offspring));


