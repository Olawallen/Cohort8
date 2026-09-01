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
console.log(hisName);

const {name, role, salary} = employee;
