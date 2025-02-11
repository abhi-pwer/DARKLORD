//var a =5;
//console.log(a);

///if - else

//Examples
/*for(let i = 0;i<=100;i++){
    let j = 0+i;
    console.log(j);
} */

   /* const ages = [20,21,22,24,25];

    for(let i = 0;i<ages.length;i++){
        if(ages[i]%2 == 0){
            console.log("Even");
        }
        else{
            console.log("Odd");
        }
    }
    console.log(ages.length);
    */


//Arrays:

  /*  let arr = [25,55,20,75,35];
    let j =0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
             j = arr[i];
        }else{
            j = arr[i+1];
        }
    }
    console.log(j); */

/*    let arr = [25, 55, 20, 75, 35];
let max = arr[0];  

for (let i = 1; i < arr.length; i++) {  
    if (arr[i] > max) {
        max = arr[i];  // Update max if a larger number is found
    }
}

console.log(max);  
*/

//Object

/*const detail = {
    firstName : "Abhishek",
    number : 9876543210
}

console.log(detail["number"]);
console.log(detail.firstName);
console.log(Object.keys(detail)); 
console.log(Object.values(detail)); 
console.log(Object.entries(detail)); 


let obj = { name: "Alice", age: 25, city: "New York" };

for (let key in obj) {
    console.log(key, obj[key]); 
} */



//Callback

/*function sum(num1,num2,fnToCall,fnToCall2){
    let result = num1+num2;
    fnToCall(result);
    fnToCall2(result);
}

function displayResult(data){
    console.log("Result of the sum is : " +data);
}

function displayResultPassive(data){
    console.log("Sum's result is : "+data);
}

const ans = sum(1,2,displayResult,displayResultPassive);
//displayResult(ans);
*/


//random example 
/*function arithematic(a,b,type,funTOCall){
    if(type == "sum"){
        let sum = a+b;
        funTOCall(sum);
    }
    if(type == "minus"){
        return a-b;
    }
}

function outputValue(data){
    console.log("Value after arithematic operation is :" +data);
}

const result = arithematic(5,2,"sum",outputValue);
//console.log(result); */



//Output based on input using node
/*const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", function(name) {
    console.log("Hello, " + name + "!");
    rl.close();
}); */

/*const msg = "abc \n def";
console.log(msg);
const msg2 = 'abcdefjf';
console.log(msg2);
const msg3 = `abcdefg
sjdbk
h`;
console.log(msg3);
*/


/*var greet = function() {
    console.log("Hello from function expression!");
};

function greet() {
  console.log("Testing");
}

setTimeout(greet, 2000);  
*/


/*let count = 30;
function incrementCounter(){
    count = count-1;
    console.log(count);
}

function target30(){
    console.log(count);
    while (count>0) {
        incrementCounter();
    }
}

target30();
*/

//Some Random JS function practice

// const value = "Abhishek";
// let ans = value.slice(1,4);
// let ans2 = value.length;

// console.log(ans);
// console.log(`Lenght is :${ans2}`);

// const str = "hello worldhe worlhed"
// console.log(str.replace("he", "hy"));
// console.log(str.replaceAll("he", "hy"));
// console.log(str.toUpperCase("he", "hy"));


const str = "random,words generate for undertanding : an : example"
console.log(str.split("words"));
