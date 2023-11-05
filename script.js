// once you have finalResult, clear the inputArr, but keep finalResult


let inputArr = [];
let finalResult = 0;

function clearArray() {
     inputArr.splice(0, inputArr.length);
     inputArr.push(finalResult);
    
};


const button0 = document.querySelector("#number0");
button0.addEventListener("click", () =>{
    inputArr.push(0);
    console.log(inputArr);
    return inputArr;
    
});

const button1 = document.querySelector("#number1");
button1.addEventListener("click", () =>{
    inputArr.push(1);
    console.log(inputArr);
    return inputArr;
    
});

const button2 = document.querySelector("#number2");
button2.addEventListener("click", () =>{
    inputArr.push(2);
    console.log(inputArr);
    return inputArr;
    
});

const button3 = document.querySelector("#number3");
button3.addEventListener("click", () =>{
    inputArr.push(3);
    console.log(inputArr);
    return inputArr;
    
});

const button4 = document.querySelector("#number4");
button4.addEventListener("click", () =>{
    inputArr.push(4);
    console.log(inputArr);
    return inputArr;
});

const button5 = document.querySelector("#number5");
button5.addEventListener("click", () =>{
    inputArr.push(5);
    console.log(inputArr);
    return inputArr;
    
});

const button6 = document.querySelector("#number6");
button6.addEventListener("click", () =>{
    inputArr.push(6);
    console.log(inputArr);
    return inputArr;
    
});

const button7 = document.querySelector("#number7");
button7.addEventListener("click", () =>{
    inputArr.push(7);
    console.log(inputArr);
    return inputArr;
    
});

const button8 = document.querySelector("#number8");
button8.addEventListener("click", () =>{
    inputArr.push(8);
    console.log(inputArr);
    return inputArr;
    
});

const button9 = document.querySelector("#number9");
button9.addEventListener("click", () =>{
    inputArr.push(9);
    console.log(inputArr);
    return inputArr;
    
});

const plusOperator = document.querySelector("#plusOperator");
plusOperator.addEventListener("click", () =>{
    inputArr.push("+");
    console.log(inputArr);
    return inputArr;
});

const minusOperator = document.querySelector("#minusOperator");
minusOperator.addEventListener("click", () =>{
    inputArr.push("-");
    console.log(inputArr);
    return inputArr;
});

const timesOperator = document.querySelector("#timesOperator");
timesOperator.addEventListener("click", () =>{
    inputArr.push("*");
    console.log(inputArr);
    return inputArr;
});

const divisionOperator = document.querySelector("#divisionOperator");
divisionOperator.addEventListener("click", () =>{
    inputArr.push("/");
    console.log(inputArr);
    return inputArr;
});

const getResult = document.querySelector("#getResult");
getResult.addEventListener("click", () =>{
    const whereOperator = inputArr.findIndex(item => item === "+" || item === "-" || item === "*" || item === "/");
    console.log("Index of the operator is: " + whereOperator);
    const rightSide = inputArr.slice(0, whereOperator);
    console.log(rightSide);
    const leftSide = inputArr.slice(whereOperator + 1);
    console.log(leftSide);

   let rightNumber = rightSide.reduce((current, next)=>{
        return (current * 10) + next;
   },0);
   console.log("Right number: " + rightNumber);

   const leftNumber = leftSide.reduce((current, next)=>{
    return (current * 10) + next;
    },0);
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
    console.log("Final result is: " + finalResult);
    clearArray();
});





















// const arrayTest = document.querySelector("#testingArray");
// arrayTest.addEventListener("click", () =>{
//     console.log(inputArr);
// });



