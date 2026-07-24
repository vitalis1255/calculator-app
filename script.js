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
    document.querySelector('.js-num1').value = 'Please Enter base, power';
    return;
  }
  
}
document.querySelector('.js-logarithm').addEventListener('click',()=>{
  logBaseTenCalculation();
});



function logBaseTwoCalculation(){
  let num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const myNum = parseFloat(num);
  if(!isNaN(myNum)){
    const resultLogTwo = (Math.log2(myNum)).toFixed(4);
    document.querySelector('.js-result').value = resultLogTwo;
    return;
  }

  let numSplit = num.split(',');

  if(numSplit.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let num1 = parseFloat(numSplit[0].trim());
  let num2 = parseFloat(numSplit[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers separated by a comma';
    return;
  }

  if(num1 === 0){
    document.querySelector('.js-result').value = 'Value running to negative infinity';
    return;
  }

  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else if(num1 === num2){
    let totalNum = Math.log2(num1).toFixed(4);
    document.querySelector('.js-result').value = `${totalNum}`;
    return;
  }else if(num1 !== num2){
    let totalNum = num1/num2;
    let logResult = Math.log2(totalNum).toFixed(4);
    document.querySelector('.js-result').value = `${logResult}`;
    return;
  }
}
document.querySelector('.js-log2').addEventListener('click',()=>{
  logBaseTwoCalculation();
});


function naturalLogCalculation(){
  const firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const numConvert = parseFloat(firstNum);
  if(!isNaN(numConvert)){
    const lnResult = (Math.log(numConvert)).toFixed(4);
    document.querySelector('.js-result').value = lnResult;
    return;
  }

  let numSplit = firstNum.split(',');

  if(numSplit.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  const num1 = parseFloat(numSplit[0].trim());
  const num2 = parseFloat(numSplit[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers separated by a comma';
    return;
  }

  if(num1 === 0){
    document.querySelector('.js-result').value = 'Error: Parameters out of range';
    return;
  }
  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else if(num1 === num2){
    const equalNum = Math.LN2(num1);
    const totalNum = equalNum.toFixed(2);
    document.querySelector('.js-result').value = `${totalNum}`;
    return;
  }else if(num1 !== num2){
    const totalNum = num1/num2;
    const logResult = Math.LN2(totalNum).toFixed(2);
    document.querySelector('.js-result').value = `${logResult}`;
    return;
  }
}
document.querySelector('.js-ln').addEventListener('click',()=>{
  naturalLogCalculation();
});



function sevenNumber(){
  document.querySelector('.js-num1').value += '7';//+= 7 Allows 7 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-seven').addEventListener('click', ()=>{
  sevenNumber();
});



function eightNumber(){
  document.querySelector('.js-num1').value += '8';//+= 8 Allows 8 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-eight').addEventListener('click', ()=>{
  eightNumber();
});



function nineNumber(){
  document.querySelector('.js-num1').value += '9';//+= 9 Allows 9 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-nine').addEventListener('click', ()=>{
  nineNumber();
});



function fourNumber(){
  document.querySelector('.js-num1').value += '4';//+= 4 Allows 4 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-four').addEventListener('click', ()=>{
  fourNumber();
});



function fiveNumber(){
  document.querySelector('.js-num1').value += '5';//+= 5 Allows 5 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-five').addEventListener('click', ()=>{
  fiveNumber();
});



function sixNumber(){
  document.querySelector('.js-num1').value += '6';//+= 6 Allows 6 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-six').addEventListener('click', ()=>{
  sixNumber();
});



function oneNumber(){
  document.querySelector('.js-num1').value += '1';//+= 1 Allows 1 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-num-one').addEventListener('click', ()=>{
  oneNumber();
});



function twoNumber(){
  document.querySelector('.js-num1').value += '2';//+= 2 Allows 2 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-num-two').addEventListener('click', ()=>{
  twoNumber();
});



function threeNumber(){
  document.querySelector('.js-num1').value += '3';//+= 3 Allows 3 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-num-three').addEventListener('click', ()=>{
  threeNumber();
});



function zeroNumber(){
  document.querySelector('.js-num1').value += '0';//+= 0 Allows 0 to stay so that you can select another separated by split(',').
}
document.querySelector('.js-num-zero').addEventListener('click', ()=>{
  zeroNumber();
});



function dotNumber(){
  document.querySelector('.js-num1').value += '.';//+= . Allows . to stay so that you can select another separated by split(',').
}
document.querySelector('.js-dot-button').addEventListener('click', ()=>{
  dotNumber();
});



function commaFunction(){
  document.querySelector('.js-num1').value += ',';//+= , Allows , to stay so that you can select another separated by split(',').
}
document.querySelector('.js-comma-button').addEventListener('click',()=>{
  commaFunction();
});

function eCalculation(){
  document.querySelector('.js-num1').value += '2.718';
}
document.querySelector('.js-e').addEventListener('click',()=>{
  eCalculation();
});

function piCalculation(){
  document.querySelector('.js-num1').value += '3.142';
}
document.querySelector('.js-pi').addEventListener('click',()=>{
  piCalculation();
});


function logXraiseTopowerY(){
  let num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let numSplit = num.split(',');

  if(numSplit.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let base = parseFloat(numSplit[0].trim());
  let power = parseFloat(numSplit[1].trim());

  if(isNaN(base) || isNaN(power)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers separated by a comma';
    return;
  }

  if(base === 0){
    document.querySelector('.js-result').value = 'Error: Parameters out of range';
    return;
  }
  if(power === 0){
    document.querySelector('.js-result').value = 'Error: Parameters out of range';
    return;
  }else if(base === power){
    let totalNum =  Math.log(power)/Math.log(base);
    document.querySelector('.js-result').value = `${totalNum}`;
    return;
  }else if(base !== power){
    let totalNum =Math.log(power)/Math.log(base);
    document.querySelector('.js-result').value = `${totalNum}`;
    return;
  }
}
document.querySelector('.js-log-basex-raise-to-y').addEventListener('click',()=>{
  logXraiseTopowerY();
});



function eRaiseToPowerX(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  const eNum = parseFloat(secondNum);
  if(!isNaN(eNum)){
    const eResultNum = (Math.exp(eNum)).toFixed(4);
    document.querySelector('.js-result').value = eResultNum;
    return;
  }

  let splitNum = secondNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let num1 = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers separated by a comma';
    return;
  }

  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else if(num1 === num2){
    let totalE = Math.exp(num1).toFixed(3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }else if(num1 !== num2){
    let totalE = Math.exp(num1/num2).toFixed(3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }
}
document.querySelector('.js-e-raise-to-power-x').addEventListener('click',()=>{
  eRaiseToPowerX();
});



function xRaiseToPower3(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //Checking for one number.
  const xNumThree = parseFloat(secondNum);
  if(!isNaN(xNumThree)){
    const xNumResult = (xNumThree ** 3).toFixed(0);
    document.querySelector('.js-result').value = xNumResult;
    return;
  }


  let splitNum = secondNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let num1 = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers separated by a comma';
    return;
  }

  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else if(num1 === num2){
    let totalE = (num1**3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }else if(num1 !== num2){
    let totalE = ((num1/num2)**3).toFixed(3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }
}
document.querySelector('.js-x-raise-to-power-3').addEventListener('click',()=>{
  xRaiseToPower3();
});



function xRaiseToPower2(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //Checking for one number:
  const xNumTwo = parseFloat(secondNum);
  if(!isNaN(xNumTwo)){
    const xNumResult = (xNumTwo ** 2).toFixed(0);
    document.querySelector('.js-result').value = xNumResult;
    return;
  }


  let splitNum = secondNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let num1 = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers separated by a comma';
    return;
  }

  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else if(num1 === num2){
    let totalE = (num1**2);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }else if(num1 !== num2){
    let totalE = ((num1/num2)**2).toFixed(3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }
}
document.querySelector('.js-x-raise-to-power-2').addEventListener('click',()=>{
  xRaiseToPower2();
});



function xRaiseToPowerMinusOne(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = "";


  //Checking for one number to calculate:
  const xMinus = parseFloat(secondNum);
  if(!isNaN(xMinus)){
    const xMinusResult = (xMinus ** -1).toFixed(1);
    document.querySelector('.js-result').value = xMinusResult;
    return;
  }


  let splitNum = secondNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let num1 = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers separated by a comma';
    return;
  }

  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else if(num1 === num2){
    let totalE = (num1**-1).toFixed(3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }else if(num1 !== num2){
    let totalE = ((num1/num2)**-1).toFixed(3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }
}
document.querySelector('.js-x-raise-to-power-minus-one').addEventListener('click',()=>{
  xRaiseToPowerMinusOne();
});



function threeSqrtX(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];


  //Checking for one number to calculate:
  const cubeX = parseFloat(secondNum);
  if(!isNaN(cubeX)){
    const cubeXresult = (Math.cbrt(cubeX)).toFixed(0);
    document.querySelector('.js-result').value = cubeXresult;
    return;
  }


  let splitNum = secondNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let num1 = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers separated by a comma';
    return;
  }

  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else if(num1 === num2){
    let totalE = Math.cbrt(num1).toFixed(3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }else if(num1 !== num2){
    let totalE = (Math.cbrt(num1/num2)).toFixed(3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }
}
document.querySelector('.js-three-sqrt-x').addEventListener('click',()=>{
  threeSqrtX();
});



function xSqrty(){
  let secondNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let splitNum = secondNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter base, power';
    return;
  }

  let num1 = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter base, power';
    return;
  }

  if(num2 === 0){
    const num2Value = num2 ** (1/num1);
    document.querySelector('.js-result').value = `${num2Value}`;
    return;
  }else if(num1 === num2){
    let totalE = (Math.pow(num2,1/num1)).toFixed(4);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }else if(num1 !== num2){
    let totalE = (Math.pow(num2,1/num1)).toFixed(4);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }
}
document.querySelector('.js-x-sqrt-y').addEventListener('click',()=>{
  xSqrty();
});


function modulus(){
  let secondNum = document.querySelector('.js-num1').value;

  let splitNum = secondNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter mod1, mod2';
    return;
  }

  const dividend = parseFloat(splitNum[0].trim());
  const divisor = parseFloat(splitNum[1].trim());

  if(isNaN(dividend) || isNaN(divisor)){
    document.querySelector('.js-result').value = 'Please enter mod1, mod2';
    return;
  }

  if(divisor === 0){
    document.querySelector('.js-result').value = 'Undefined';
    return;
  }else if(dividend !== divisor){
    const totalE = dividend % divisor;
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }
}
document.querySelector('.js-module').addEventListener('click',()=>{
  modulus();
  document.querySelector('.js-num1').value = [];
});