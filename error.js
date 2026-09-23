// An error is what happens when javaScript cannot run your code because something went wrong. 
// When an error occurs, javaScript STOPS running and shows an error message
// Common types of errors
// SyntaxError: you made a typo or forgot something like a bracket
// ReferenceError: You used a variable that does not exist.
// TypeError: You used a value in the wrong way

// let add = 2 + 3 - (4 + 5);
let add = 2 + 3 - (4 + 5);
    console.log(add);
    

//try AND catch
// try-catch lets your program handle errors gracefully. instead of crashing, javaScript runs your backup plan inside the catch block

try {
    //Code that might fail goes here
    let result = 10 / 5;
    console.log(result);
    undefinedFunction(); //This will cause an error!
    console.log("This line will NOT run.");    
} catch (error) {
    // This runs ONLY if something goes wrong
    console.log("An error occurred: " + error.message + " " + error.name);    
}

console.log("The program continues here");

try{
    let user = null;
    console.log(user.name); //Cannot read property of null    
} catch (error) {
    console.log(error.name); // typeError
    console.log(error.message); // Cannot read properties of null
    // console.log(error.stack); // Full details and line number
}

// error.name shows the type of error e.g TypeError
// error.message shows a human-readable explanantion
// error.stack shows a full trace showing where the error happened

//The finally block ALWAYS runs, whether or not an error occured. Use it for cleanup tasks like closing a connection
// or showing a "loading done" message.


function loadUserData(userId) {
    console.log("Starting to load data...");
    try {
        if(userId <= 0) {
            throw new Error("User ID must be greater than 0")
        }
        console.log("Data loaded for user: " + userId);        
    } catch (error) {
        console.log("Failed: " + error.message);        
    } finally {
        console.log("Loading complete. Closing conection."); //ALWAYS runs        
    }    
}

loadUserData(5)

function registerStudent(name, age) {
    try {
        if (!name) {
            throw new Error("Name cannot be empty!")
        }
        if (age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " + age)
        }
        console.log("Student registered: " + name + ", Age: " + age);        
    } catch (error) {
        console.log("Registration failed: " + error.message);
        
    } 
}

registerStudent("Olawale Oyewunmi", 30)
registerStudent("", 22)
registerStudent("Kemi", 12)
