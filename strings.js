const hisName = "olaWalE"
console.log(hisName.toLowerCase());
console.log(hisName.toUpperCase());


function lowerMe (value) {
    return value.toLowerCase();
}
console.log(lowerMe(hisName));

const trimExample = "       Hello World!    "
console.log(trimExample.trim()); // "Hello World"
console.log(trimExample.trimStart()); //removes spaces from the start alone
console.log(trimExample.trimEnd()); //removes spaces from the end alone


//startsWith() and endsWith()

let filename = "report_final_2024.pdf";

console.log(filename.startsWith("report")); //true
console.log(filename.startsWith("draft"));  //false
console.log(filename.endsWith(".pdf"));  //true
console.log(filename.endsWith(".docx"));  //false

// slice() and substring()
// Both slice and substring cut out of a string. You tell them WHERE to start and WHERE to stop. 
// The character at the stop position is NOT included.


const extractExample = "Esther"
console.log(extractExample.slice(0, 3));  // "Est"
console.log(extractExample.slice(3));  // "her"
console.log(extractExample.slice(-3)); // "her"
console.log(extractExample.substring(0, 3)); // "Est"
console.log(extractExample.substring(3)); // "her"
console.log(extractExample.substring(-3)); // "Esther"






