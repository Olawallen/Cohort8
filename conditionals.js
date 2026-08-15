
// if/eslse
let age = 40

if (age >=18){
    console.log("you can vote");    
}else{
    console.log("you can not vote");    
}

let gender ="female"

if (gender === "female"){
    console.log("you are a female, use the ladies restroom");    
}else if(gender === "non-binary"){
    console.log("use the non-binary room");    
}else if(gender === "trans"){
    console.log("Use the trans room");    
}else{
    console.log("you are a male, use the men's restrom");    
}

//for loop repeats a block of code a specific number of times. instead of copy pasting the same line 100 times, you write it once inside a loop.

/**
 * Basic Structure
 * for(start; condition; increment){
 * code to repeat/loop
 * }
 */

for (let i = 0; i<10; i++){
    console.log(i);    
}

let arrOfNames = ["james", "jane", "joe", "jim", "jess"]
console.log(arrOfNames.length);

for(let names = 0; names <arrOfNames.length; names++){
    console.log("TECHCRUSH" + arrOfNames[names]);    
}

for(let x=0; x<36; x++){
    console.log(x * 2);    
} 

//while 

// while(condition){
//     //code to repeat;
//    increment
// }
  
let loginAttempt = 1
while(loginAttempt <=5){
    console.log("attempt" + loginAttempt);
    loginAttempt++    
}



// let scores = [20, 12 ,25 , 15];

// for(let newScore = 0; newScore < scores.length; newScore++){
//     console.log(scores[newScore] + 20);    
// }

