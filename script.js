//ADDITION FUNCTION
function add(){
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  
  //separate the two numbers with a comma.
  let split_num = first_num.split(',');

  //check if the user entered two numbers.
  if(split_num.length !== 2){
    document.querySelector('.js-num1').value = 'Please Enter num1, num2';
    return;
  }
  

  //convert the texts to actual numbers, save them in a variable and use trim to remove space.
  let num1 = parseFloat(split_num[0].trim());
  let num2 = parseFloat(split_num[1].trim());

  //check if the numbers are valid.
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-num1').value = 'Please Enter valid num1, num2';
    return;
  }
  //sum the numers:
  let sum = num1 + num2;
  document.querySelector('.js-num1').value = `${sum}`;
}
document.querySelector('.js-add-button').addEventListener('click', ()=>{
  add();
});



//SUBTRACTION FUNCTION
function subtract(){
  //collect the  string numbers:
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //split the text num with a comma:
  let num_split = first_num.split(',');

  //check if the user entered two numbers:
  if(num_split.length !==2){
    document.querySelector('.js-num1').value = 'Please Enter num1, num2';
    return;
  }

  //convert the string numbers to actual numbers and use trim to remove spaces:
  let num1 = parseFloat(num_split[0].trim());
  let num2 = parseFloat(num_split[1].trim());

  //check if the user entered two numbers
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-num1').value = 'Please Enter valid num1, num2';
    return;
  }

  //subtract the two numbers:
  let sub = num1 - num2;
  document.querySelector('.js-num1').value = `${sub}`;
}
document.querySelector('.js-sub-button').addEventListener('click', ()=>{
  subtract();
});



//DIVISION FUNCTION
function divide(){
  //collect the  string numbers:
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //split the text num with a comma:
  let num_split = first_num.split(',');

  //check if the user entered two numbers:
  if(num_split.length !==2){
    document.querySelector('.js-num1').value = 'Please Enter num1, num2';
    return;
  }

  //convert the string numbers to actual numbers and use trim to remove spaces:
  let num1 = parseFloat(num_split[0].trim());
  let num2 = parseFloat(num_split[1].trim());

  //check if the user entered two numbers
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-num1').value = 'Please Enter valid num1, num2';
    return;
  }

  //divide the two numbers:
  let divide_num = (num1 / num2).toFixed(4);
  if(num2 === 0){
    document.querySelector('.js-num1').value = 'Error: Division by zero';
    return;

  }else if(num1 === 0){
    divide_num = (num1 / num2).toFixed(0);
    document.querySelector('.js-num1').value = `${divide_num}`;
    return;

  }else if(num1 !== num2){
    const divide_num = (num1/num2 || num2/num1).toFixed(2);
    document.querySelector('.js-num1').value = divide_num;
    return;
  }
}
document.querySelector('.js-divide-button').addEventListener('click', ()=>{
  divide();
})



//MULTIPLICATION FUNCTION
function multiply(){
  //collect the  string numbers:
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //split the text num with a comma:
  let num_split = first_num.split(',');

  //check if the user entered two numbers:
  if(num_split.length !==2){
    document.querySelector('.js-num1').value = 'Please Enter num1, num2';
    return;
  }

  //convert the string numbers to actual numbers and use trim to remove spaces:
  let num1 = parseFloat(num_split[0].trim());
  let num2 = parseFloat(num_split[1].trim());

  //check if the user entered two numbers
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-num1').value = 'Please Enter valid num1, num2';
    return;
  }

  //multiply the two numbers:
  let mult = num1 * num2;
  document.querySelector('.js-num1').value = `${mult}`;
}
document.querySelector('.js-multiply').addEventListener('click', ()=>{
  multiply();
});



//CLEAR INPUT FUNCTION
let resetValue = '';
function resetCalculator(){
  let first_reset= document.querySelector('.js-num1');
  first_reset.value = [];
  
  localStorage.setItem('resetValue', JSON.stringify(resetValue));

  document.querySelector('.js-num1').value = JSON.parse(localStorage.getItem('resetValue'));
}
document.querySelector('.js-reset').addEventListener('click', ()=>{
  resetCalculator();
});



//SIN FUNCTION
function sinCalculation(){
  //collect the  string numbers:
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];


  const num = Number(first_num);
  if(num){
    const teta = num * (Math.PI/180);
    const resultTeta = (Math.sin(teta)).toFixed(4);
    document.querySelector('.js-num1').value = `${resultTeta} Radians`;
    return;

  }else if(isNaN(num)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;

  }
}

document.querySelector('.js-sin').addEventListener('click', ()=>{
  sinCalculation();
});



//COS FUNCTION
function cosCalculation(){
  //get the input values:
  let inputVal = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const inputNum = Number(inputVal);

  if(inputNum){
    const teta = inputNum * (Math.PI/180);
    const cosTotal = Math.cos(teta).toFixed(4);
    document.querySelector('.js-num1').value = `${cosTotal} radians`;
    return;

  }else if(isNaN(inputNum)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }

}
document.querySelector('.js-cos').addEventListener('click', ()=>{
  cosCalculation();
});



//TAN FUNCTION
function tanCalculation(){
  //get the input values:
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const tanNum = Number(firstNum);
  if(tanNum){
    const teta = tanNum * (Math.PI/180);
    const tetaTotalTan = Math.tan(teta).toFixed(4);
    document.querySelector('.js-num1').value = `${tetaTotalTan} radians`;
    return;

  }else if(isNaN(tanNum)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }

  
}
document.querySelector('.js-tan').addEventListener('click',()=>{
  tanCalculation();
});



//SIN INVERSE FUNCTION
function asinCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const myAsinNum = parseFloat(firstNum);
  if(!isNaN(myAsinNum)){
    const resultRadians = Math.asin(myAsinNum)
    const resultDegrees = resultRadians * (180/Math.PI);
    document.querySelector('.js-num1').value = `${resultDegrees.toFixed(0)} Degrees`;
    return;

  }else if(isNaN(myAsinNum)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }
  
}
document.querySelector('.js-asine').addEventListener('click', ()=>{
  asinCalculation();
});



//COS INVERSE FUNCTION
function acosCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const myCosNum = parseFloat(firstNum);
  if(!isNaN(myCosNum)){
    const resultRadians = Math.acos(myCosNum)
    const resultDegrees = resultRadians * (180/Math.PI);
    document.querySelector('.js-num1').value = `${resultDegrees.toFixed(0)} Degrees`;
    return;

  }else if(isNaN(myCosNum)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }
  
}
document.querySelector('.js-acose').addEventListener('click', ()=>{
  acosCalculation();
});



//TAN INVERSE FUNCTION
function atanCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const myAtanNum = parseFloat(firstNum);
  if(!isNaN(myAtanNum)){
    const resultRadians = Math.atan(myAtanNum)
    const resultDegrees = resultRadians * (180/Math.PI);
    document.querySelector('.js-num1').value = `${resultDegrees.toFixed(2)} Degrees`;
    return;

  }else if(isNaN(myAtanNum)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }
  
}
document.querySelector('.js-atan').addEventListener('click', ()=>{
  atanCalculation();
});



//EXPONENTIAL FUNCTION
function expCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const myExpNum = parseFloat(firstNum);
  if(!isNaN(myExpNum)){
    const resultExp = myExpNum.toExponential();
    document.querySelector('.js-num1').value = resultExp;
    return;

  }else if(isNaN(myExpNum)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }

}

document.querySelector('.js-exp').addEventListener('click',()=>{
  expCalculation();
});




//SQUARE ROOT FUNCTION
function squareCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let squareSplit = firstNum.split(',');

  //CONVERTING THE STRING TO ACTUAL NUMBER
  const mySquareNum = parseFloat(firstNum);
  if(!isNaN(mySquareNum)){
    const resultSquare = Math.sqrt(mySquareNum);
    document.querySelector('.js-num1').value = resultSquare;
    return;

    //CHECKING IF IT NOT A NUMBER
  }else if(isNaN(mySquareNum)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }

}

document.querySelector('.js-square').addEventListener('click', ()=>{
  squareCalculation();
});



//X RAISE TO POWER Y FUNCTION
function xRaiseToPower(){
  let num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //SPLIT THE NUMBERS INTO TWO
  let numSplit = num.split(',');


  //CHECKING IF THE NUMBERS ENTERED IS LESS OR GREATER THAN TWO.
  if(numSplit.length !== 2){
    document.querySelector('.js-num1').value = 'Please Enter base, power';
    return;
  }

  //CONVERTING THE NUMBERS TO ACTUAL NUMBERS USING PARSEFLOAT(),THEN USE TRIM() TO REMOVE WHITE SPACE.
  let num1 = parseFloat(numSplit[0].trim());
  let num2 = parseFloat(numSplit[1].trim());

  //CHECKING IF THE TWO NUMBERS ENTERED ARE REALLY REAL NUMBERS.
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-num1').value = 'Please Enter valid base, power';
    return;
  }

  let raisePower = Math.pow(num1,num2);
  document.querySelector('.js-num1').value = `${raisePower}`;
}
document.querySelector('.js-raise-power').addEventListener('click', ()=>{
  xRaiseToPower();
});




//LOG TO BASE TEN FUNCTION
function logBaseTenCalculation(){
  let num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //CONVERT TO REAL NUMBERS
  const myNum = parseFloat(num);
  if(!isNaN(myNum)){
    const resultLogTen = (Math.log10(myNum)).toFixed(4);
    document.querySelector('.js-num1').value = resultLogTen;
    return;

  }else if(isNaN(myNum)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }
  
}
document.querySelector('.js-logarithm').addEventListener('click',()=>{
  logBaseTenCalculation();
});



//LOG TO BASE TWO FUNCTION
function logBaseTwoCalculation(){
  let num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //CONVERT TO REAL NUMBERS
  const myNum = parseFloat(num);
  if(!isNaN(myNum)){
    const resultLogTwo = (Math.log2(myNum)).toFixed(4);
    document.querySelector('.js-result').value = resultLogTwo;
    return;

  }else if(isNaN(myNum)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }

}
document.querySelector('.js-log2').addEventListener('click',()=>{
  logBaseTwoCalculation();
});




//NATURAL LOG FUNCTION KNOWN AS LN
function naturalLogCalculation(){
  const firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //CONVERT TO REAL NUMBERS
  const numConvert = parseFloat(firstNum);
  if(!isNaN(numConvert)){
    const lnResult = (Math.log(numConvert)).toFixed(4);
    document.querySelector('.js-num1').value = lnResult;
    return;

    //CHECKING IF IT IS NOT A NUMBER
  }else if(isNaN(numConvert)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }
}

document.querySelector('.js-ln').addEventListener('click',()=>{
  naturalLogCalculation();
});



//FUNCTION SEVEN
function sevenNumber(){
  document.querySelector('.js-num1').value += '7';//+= 7 Allows 7 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-seven').addEventListener('click', ()=>{
  sevenNumber();
});



//FUNCTION EIGHT
function eightNumber(){
  document.querySelector('.js-num1').value += '8';//+= 8 Allows 8 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-eight').addEventListener('click', ()=>{
  eightNumber();
});



//FUNCTION NINE
function nineNumber(){
  document.querySelector('.js-num1').value += '9';//+= 9 Allows 9 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-nine').addEventListener('click', ()=>{
  nineNumber();
});



//FUNCTION FOUR
function fourNumber(){
  document.querySelector('.js-num1').value += '4';//+= 4 Allows 4 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-four').addEventListener('click', ()=>{
  fourNumber();
});



//FUNCTION FIVE
function fiveNumber(){
  document.querySelector('.js-num1').value += '5';//+= 5 Allows 5 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-five').addEventListener('click', ()=>{
  fiveNumber();
});



//FUNCTION SIX
function sixNumber(){
  document.querySelector('.js-num1').value += '6';//+= 6 Allows 6 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-six').addEventListener('click', ()=>{
  sixNumber();
});



//FUNCTION ONE
function oneNumber(){
  document.querySelector('.js-num1').value += '1';//+= 1 Allows 1 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-num-one').addEventListener('click', ()=>{
  oneNumber();
});



//FUNCTION TWO
function twoNumber(){
  document.querySelector('.js-num1').value += '2';//+= 2 Allows 2 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-num-two').addEventListener('click', ()=>{
  twoNumber();
});



//FUNCTION THREE
function threeNumber(){
  document.querySelector('.js-num1').value += '3';//+= 3 Allows 3 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-num-three').addEventListener('click', ()=>{
  threeNumber();
});



//FUNCTION ZERO
function zeroNumber(){
  document.querySelector('.js-num1').value += '0';//+= 0 Allows 0 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-num-zero').addEventListener('click', ()=>{
  zeroNumber();
});



//FUNCTION DOT
function dotNumber(){
  document.querySelector('.js-num1').value += '.';//+= . Allows . to stay so that you can select another separated by split(',').
}
document.querySelector('.js-dot-button').addEventListener('click', ()=>{
  dotNumber();
});



//FUNCTION COMMA
function commaFunction(){
  document.querySelector('.js-num1').value += ',';//+= , Allows , to stay so that you can select another separated by split(',').
}
document.querySelector('.js-comma-button').addEventListener('click',()=>{
  commaFunction();
});



//EXPONENTIAL FUNCTION
function eCalculation(){
  document.querySelector('.js-num1').value += '2.718';
}
document.querySelector('.js-e').addEventListener('click',()=>{
  eCalculation();
});



//PI FUNCTION
function piCalculation(){
  document.querySelector('.js-num1').value += '3.142';
}
document.querySelector('.js-pi').addEventListener('click',()=>{
  piCalculation();
});



//FUNCTION LOG X TO POWER Y
function logXraiseTopowerY(){
  let num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //SPLIT TWO NUMBER INTO TWO USING SPLIT() METHOD
  let numSplit = num.split(',');

  //CHECK IF THE LENGHT OF THE NUMBERS ARE LESS THAN OR GREATER THAN TWO
  if(numSplit.length !== 2){
    document.querySelector('.js-num1').value = 'Please Enter base, power';
    return;
  }

  //CONVERT THEM TO REAL NUMBERS
  let base = parseFloat(numSplit[0].trim());
  let power = parseFloat(numSplit[1].trim());

  //CHECK IF THE USER ENTERED VALID TWO NUMBERS
  if(isNaN(base) || isNaN(power)){
    document.querySelector('.js-num1').value = 'Please Enter base, power';
    return;
  }

  if(base === 0){
    document.querySelector('.js-num1').value = 'Error:num out of range';
    return;
  }
  if(power === 0){
    document.querySelector('.js-num1').value = 'Error:num out of range';
    return;

  }else if(base === power){
    let totalNum =  (Math.log(power)/Math.log(base)).toFixed(4);
    document.querySelector('.js-num1').value = `${totalNum}`;
    return;

  }else if(base !== power){
    let totalNum = (Math.log(power)/Math.log(base)).toFixed(4);
    document.querySelector('.js-num1').value = `${totalNum}`;
    return;
  }
}

document.querySelector('.js-log-basex-raise-to-y').addEventListener('click',()=>{
  logXraiseTopowerY();
});



//FUNCTION E TO POWER X
function eRaiseToPowerX(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const eNum = parseFloat(secondNum);
  if(!isNaN(eNum)){
    const eResultNum = (Math.exp(eNum)).toFixed(2);
    document.querySelector('.js-num1').value = eResultNum;
    return;

  }else if(isNaN(eNum)){
    document.querySelector('.js-num1').value = 'Please Enter a validd num';
    return;
  }
}

document.querySelector('.js-e-raise-to-power-x').addEventListener('click',()=>{
  eRaiseToPowerX();
});




//FUNCTION X TO POWER THREE
function xRaiseToPower3(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //Checking for one number.
  const xNumThree = parseFloat(secondNum);
  if(!isNaN(xNumThree)){
    const xNumResult = (xNumThree ** 3).toFixed(0);
    document.querySelector('.js-num1').value = xNumResult;
    return;

  }else if(isNaN(xNumThree)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }

}
document.querySelector('.js-x-raise-to-power-3').addEventListener('click',()=>{
  xRaiseToPower3();
});




//FUNCTION X TO POWER TWO
function xRaiseToPower2(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //Checking for one number:
  const xNumTwo = parseFloat(secondNum);
  if(!isNaN(xNumTwo)){
    const xNumResult = (xNumTwo ** 2).toFixed(0);
    document.querySelector('.js-num1').value = xNumResult;
    return;

  }else if(isNaN(xNumTwo)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }

}

document.querySelector('.js-x-raise-to-power-2').addEventListener('click',()=>{
  xRaiseToPower2();
});





//FUNCTION X TO POWER MINUS ONE
function xRaiseToPowerMinusOne(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = "";


  //Checking for one number to calculate:
  const xMinus = parseFloat(secondNum);
  if(!isNaN(xMinus)){
    const xMinusResult = (xMinus ** -1).toFixed(1);
    document.querySelector('.js-num1').value = xMinusResult;
    return;

  }else if(isNaN(xMinus)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }

}

document.querySelector('.js-x-raise-to-power-minus-one').addEventListener('click',()=>{
  xRaiseToPowerMinusOne();
});




//CUBE ROOT OF A NUMBER FUNCTION
function threeSqrtX(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];


  //Checking for one number to calculate:
  const cubeX = parseFloat(secondNum);
  if(!isNaN(cubeX)){
    const cubeXresult = (Math.cbrt(cubeX)).toFixed(0);
    document.querySelector('.js-num1').value = cubeXresult;
    return;

  }else if(isNaN(cubeX)){
    document.querySelector('.js-num1').value = 'Please Enter a valid num';
    return;
  }

}

document.querySelector('.js-three-sqrt-x').addEventListener('click',()=>{
  threeSqrtX();
});




//FUNCTION OF X SQUARE ROOT Y
function xSqrty(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //SPLIT THE TWO NUMBERS
  let splitNum = secondNum.split(',');

  //CHECK IF THE LENGHT OF THE SPLITTED NUMBER IS LESS OR GREATER THAN TWO
  if(splitNum.length !== 2){
    document.querySelector('.js-num1').value = 'Please Enter base, power';
    return;
  }

  //CONVERT THEM TO REAL NUMBERS
  let num1 = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  //CHECK IF THE USER ENTERED REAL NUMBERS
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-num1').value = 'Please Enter base, power';
    return;
  }

  if(num2 === 0){
    const num2Value = num2 ** (1/num1);
    document.querySelector('.js-num1').value = `${num2Value}`;
    return;

  }else if(num1 === num2){
    let totalE = (Math.pow(num2,1/num1)).toFixed(2);
    document.querySelector('.js-num1').value = `${totalE}`;
    return;

  }else if(num1 !== num2){
    let totalE = (Math.pow(num2,1/num1)).toFixed(2);
    document.querySelector('.js-num1').value = `${totalE}`;
    return;
  }
}

document.querySelector('.js-x-sqrt-y').addEventListener('click',()=>{
  xSqrty();
});




//FUNCTION MODULUS
function modulus(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  //SPLIT THE NUMBERS
  let splitNum = secondNum.split(',');

  //CHECK IF THE LENGHT OF THE NUMBERS IS LESS OR GREATER THAN TWO
  if(splitNum.length !== 2){
    document.querySelector('.js-num1').value = 'Please Enter dvdend, divsor';
    return;
  }

  //CONVERT TO REAL NUMBERS
  const dividend = parseFloat(splitNum[0].trim());
  const divisor = parseFloat(splitNum[1].trim());

  //CHECK IF THE USER ENTERED REAL NUMBERS
  if(isNaN(dividend) || isNaN(divisor)){
    document.querySelector('.js-num1').value = 'Please Enter dvdend, divsor';
    return;
  }

  if(divisor === 0){
    document.querySelector('.js-num1').value = 'Undefined!';
    return;

  }else if(dividend === 0){
    document.querySelector('.js-num1').value = 'Undefined!!!';
    return;

  }else if(dividend !== divisor){
    const totalE = dividend % divisor;
    document.querySelector('.js-num1').value = `${totalE}`;
    return;
  }
}

document.querySelector('.js-module').addEventListener('click',()=>{
  modulus();
});



//SIGNUM FUNCTION
function signCalculation(){
  //use Math.sign(num) to calculate
  const sign = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = " ";

  //CONVERT SIGN TO A REAL NUMBER
  const signResult = parseFloat(sign);

  if(signResult){
    const result = Math.sign(signResult);
    document.querySelector('.js-num1').value = result;
    return;
  }
  
}

document.querySelector('.js-sgn').addEventListener('click',()=>{
  signCalculation();
});



//ABSOLUTE FUNCTION
function absoluteFunc(){
  //use Math.abs(num) for absolute calculation
  const abs = document.querySelector('.js-num1').value;

  //CONVERT ABS TO A REAL NUMBER
  const absResult = parseFloat(abs);

  //CHECK IF ABS IS A REAL NUMBER
  if(absResult){
    const absoluteValue = Math.abs(absResult);
    document.querySelector('.js-num1').value = `Is: ${absoluteValue}`;
    return;
  }

}

document.querySelector('.js-abs').addEventListener('click',()=>{
  absoluteFunc();
});



//FACTORIAL FUNCTION
function factorialFunc(){
  const n = document.querySelector('.js-num1').value;
  let result = 1;

  //CONVERT N TO A REAL NUMBER
  if(n){
    const nValue = parseFloat(n);
    if(nValue <= 0){
      document.querySelector('.js-num1').value = undefined;
     return;

    }else if(nValue > 0){
      for(let i = 1; i<= nValue; i++){
        result *=i;
      }
    }
  }
  document.querySelector('.js-num1').value = `${result}`;
}

document.querySelector('.js-factorial').addEventListener('click',()=>{
  factorialFunc();
});