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



