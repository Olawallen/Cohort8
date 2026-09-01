//declare
function functionName (){
    //code to run
}

//functions without parameters

function greeting (){
    console.log("HELLO WORLD");
    
}

greeting()


// functions with parameters
function welcome(name){
    console.log(`welcome to class MR/MISS/MRS ${name}`);    
}

welcome("Esther")

//add

function add (){
    let x = 4;
    let y = 6;
    return x + y
}
console.log(add());

//use the console.log for a functon that is not returning any value  but a 'return' keyword for a function that is returning a value
//this is a static function. the values don't change.
//any function without a return keyword is an undefined function

function addition (x, y){
    return x + y
}
/**
 * The return keyword shold be the last thing written within the function block
 * any other thing written under won't run at all. 
 */
console.log(addition(2, 3));
//This is a dynamic function. the values can change.

// function ageCheck(age){
//     return age >= 18
// }




function ageCheck(age){
    if(age<= 18){
        return "please GET OUT... YOU ARE UNDERAGED"   
    }else{
        return "Buy one bottle for me Egbon!!"
    }
}

let estherAge = ageCheck(15)

console.log(estherAge);

//Classwork: if the number === 4, return "congratulations" else "try again"

function luckyNumber(number){
    if (number === 4){
        return "congratulations"
    }else{
        return "try again later"
    }
}

let number = 4
console.log(luckyNumber(number));

//scope
//global scope
let score = 75;
// function gradingSystem(){
//     if (score >= 50){
//         return "PASSED!"
//     }else{
//         return "FAILED!!!"
//     }
// }

//local scope
function deliveryFee(){
    let fee = 5000
    return fee
}

/**classwork: write a funtion that grades a student score, if the score 
 * 1: 70-100 display "A"
 * 2: 50-69 display "B"
 * 3: 0-49 display "F"
*/

function grading(score){
    if(score >= 70 && score <= 100){
        return "A"
    }else if(score >= 50 && score <= 69){
        return "B"
    }else{return "F"}
}

console.log(grading(30));

// two types of functions. Name functions and arrow functions.

//ARROW FUNCTIONS
const minus = (num)=>{
    return num - 50
}
let result = minus(75)
console.log(result);
