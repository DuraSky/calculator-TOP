//user can enter one full array with an operator
//once an operator is pressed, check if leftNumber is null 
// if not, run operate(), if yes, let user input a number

let inputArr = [];
let finalResult = 0;
const display = document.querySelector("#calculatorDisplay");
// let rightNumber = 0;
// let leftNumber = 0;

let leftSideDefined = false;


function clearArray() {
     inputArr.splice(0, inputArr.length - 1);
     inputArr.unshift(finalResult);
    //  leftSideDefined = false;  
    
     console.log(inputArr);
};


function updateDisplay(){
    let modifInputArr = inputArr.join('');
    return modifInputArr;
};



function operate(){
    //  if (leftSideDefined) {
    
    const whereOperator = inputArr.findIndex(item => item === "+" || item === "-" || item === "*" || item === "/");
    console.log("Index of the operator is: " + whereOperator);
    const rightSide = inputArr.slice(0, whereOperator);
    console.log(rightSide);
    let leftSide = inputArr.slice(whereOperator + 1);
    console.log(leftSide);
    let rightNumber = parseFloat(rightSide.join('')); 
    console.log("Right number: " + rightNumber);
    let leftNumber = parseFloat(leftSide.join('')); 
    console.log("Left number: " + leftNumber);

    

    if(inputArr[whereOperator] === "+"){
        finalResult = rightNumber + leftNumber;
    } else if (inputArr[whereOperator] === "-"){
        finalResult = rightNumber - leftNumber;
    } else if (inputArr[whereOperator] === "*"){
        finalResult = rightNumber * leftNumber;
    } else if (inputArr[whereOperator] === "/"){
        finalResult = rightNumber / leftNumber;
    }
    clearArray();

// }   
};


const button0 = document.querySelector("#number0");
button0.addEventListener("click", () =>{
    inputArr.push(0);
    console.log(inputArr);  
    display.value = updateDisplay();
    
});

const button1 = document.querySelector("#number1");
button1.addEventListener("click", () =>{
    inputArr.push(1);
    console.log(inputArr);
    display.value = updateDisplay();
    
});

const button2 = document.querySelector("#number2");
button2.addEventListener("click", () =>{
    inputArr.push(2);
    console.log(inputArr);
    display.value = updateDisplay();
    
});

const button3 = document.querySelector("#number3");
button3.addEventListener("click", () =>{
    inputArr.push(3);
    console.log(inputArr);
    display.value = updateDisplay();
    
});

const button4 = document.querySelector("#number4");
button4.addEventListener("click", () =>{
    inputArr.push(4);
    console.log(inputArr);
    display.value = updateDisplay();
});

const button5 = document.querySelector("#number5");
button5.addEventListener("click", () =>{
    inputArr.push(5);
    console.log(inputArr);
    display.value = updateDisplay();
    
});

const button6 = document.querySelector("#number6");
button6.addEventListener("click", () =>{
    inputArr.push(6);
    console.log(inputArr);
    display.value = updateDisplay();
    
});

const button7 = document.querySelector("#number7");
button7.addEventListener("click", () =>{
    inputArr.push(7);
    console.log(inputArr);
    display.value = updateDisplay();
    
});

const button8 = document.querySelector("#number8");
button8.addEventListener("click", () =>{
    inputArr.push(8);
    console.log(inputArr);
    display.value = updateDisplay();
    
});

const button9 = document.querySelector("#number9");
button9.addEventListener("click", () =>{
    inputArr.push(9);
    console.log(inputArr);
    display.value = updateDisplay();
    
});

const plusOperator = document.querySelector("#plusOperator");
plusOperator.addEventListener("click", () =>{
    
    if (leftSideDefined) {
        inputArr.push("+");
        console.log("if condition for plus: " +inputArr);
        operate();
    } else {
        inputArr.push("+");
        console.log("else condition for plus: " +inputArr);
        leftSideDefined = true; // Set the flag to true when entering an operator
    }
    display.value = updateDisplay();
});

const minusOperator = document.querySelector("#minusOperator");
minusOperator.addEventListener("click", () =>{
    if (leftSideDefined) {
        inputArr.push("-");
        console.log("if condition for plus: " +inputArr);
        operate();
    } else {
        inputArr.push("-");
        console.log("else condition for plus: " +inputArr);
        leftSideDefined = true; // Set the flag to true when entering an operator
    }
    display.value = updateDisplay();
});

const timesOperator = document.querySelector("#timesOperator");
timesOperator.addEventListener("click", () =>{
    if (leftSideDefined) {
        inputArr.push("*");
        console.log("if condition for plus: " +inputArr);
        operate();
    } else {
        inputArr.push("*");
        console.log("else condition for plus: " +inputArr);
        leftSideDefined = true; // Set the flag to true when entering an operator
    }
    display.value = updateDisplay();
});

const divisionOperator = document.querySelector("#divisionOperator");
divisionOperator.addEventListener("click", () =>{
    if (leftSideDefined) {
        inputArr.push("/");
        console.log("if condition for plus: " +inputArr);
        operate();
    } else {
        inputArr.push("/");
        console.log("else condition for plus: " +inputArr);
        leftSideDefined = true; // Set the flag to true when entering an operator
    }
    display.value = updateDisplay();
});

const dot = document.querySelector("#dot");
dot.addEventListener("click", () =>{
    inputArr.push(".");
    console.log(inputArr);
    display.value = updateDisplay();
});

const getResult = document.querySelector("#getResult");
getResult.addEventListener("click", () =>{
    operate();
    console.log("Final result is: " + finalResult);
    display.value = finalResult;
    
});

