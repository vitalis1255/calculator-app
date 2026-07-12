function add(){
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  
  //separate the two numbers with a comma.
  //Initially, we have empty strings like this''; If you click button 1, we have '' + '1'; if you click button 2, we have '1' + '2' = 12, if you click button 3, we have '12' + '3', we have 123.
  let split_num = first_num.split(',');

  //check if the user entered two numbers
  if(split_num.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma:';
    return;
  }
  

  //convert the texts to actual numbers, save them in a variable and use trim to remove spcae
  let num1 = parseFloat(split_num[0].trim());
  let num2 = parseFloat(split_num[1].trim());

  //check if the numbers are valid
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter valid numbers';
    return;
  }
  //sum the numers:
  let sum = num1 + num2;
  document.querySelector('.js-result').value = `${sum}`;

  //const second_num = document.querySelector('.js-num2');
  //let first = first_num.value;
  //let second = second_num.value;
  //const total_value1 = Number(first);
  //const total_value2 = Number(second);
  //let total = total_value1 + total_value2;
}
document.querySelector('.js-add-button').addEventListener('click', ()=>{
  add();
});



function subtract(){
  //collect the  string numbers:
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //split the text num with a comma:
  //Initially, we have empty strings like this''; If you click button 1, we have '' + '1'; if you click button 2, we have '1' + '2' = 12, if you click button 3, we have '12' + '3', we have 123.
  let num_split = first_num.split(',');

  //check if the user entered two numbers:
  if(num_split.length !==2){
    document.querySelector('.js-result').value = 'Please enter two numbers';
    return;
  }

  //convert the string numbers to actual numbers and use trim to remove spaces:
  let num1 = parseFloat(num_split[0].trim());
  let num2 = parseFloat(num_split[1].trim());

  //check if the user entered two numbers
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter actual two numbers:';
    return;
  }

  //subtract the two numbers:
  let sub = num1 - num2;
  document.querySelector('.js-result').value = `${sub}`;

  //const second_num = document.querySelector('.js-num2');
  //let first = first_num.value;
  //let second = second_num.value;
  //const total_value1 = Number(first);
  //const total_value2 = Number(second);
  //let total = total_value1 - total_value2;
}
document.querySelector('.js-sub-button').addEventListener('click', ()=>{
  subtract();
});


function divide(){
  //collect the  string numbers:
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //split the text num with a comma:
  //Initially, we have empty strings like this''; If you click button 1, we have '' + '1'; if you click button 2, we have '1' + '2' = 12, if you click button 3, we have '12' + '3', we have 123.
  let num_split = first_num.split(',');

  //check if the user entered two numbers:
  if(num_split.length !==2){
    document.querySelector('.js-result').value = 'Please enter two string numbers';
    return;
  }

  //convert the string numbers to actual numbers and use trim to remove spaces:
  let num1 = parseFloat(num_split[0].trim());
  let num2 = parseFloat(num_split[1].trim());

  //check if the user entered two numbers
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter actual two numbers:';
    return;
  }

  //divide the two numbers:
  let divide_num = (num1 / num2).toFixed(2);
  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else{
    document.querySelector('.js-result').value = `${divide_num}`;
  }
  //const first_num = document.querySelector('.js-num1');
  //const second_num = document.querySelector('.js-num2');
  //let first = first_num.value;
  //let second = second_num.value;
  //const total_value1 = Number(first);
  //const total_value2 = Number(second);
  //let total = Math.round((total_value1 / total_value2) * 1000) / 1000;
  //document.querySelector('.js-result').value = `${total}`;
}
document.querySelector('.js-divide-button').addEventListener('click', ()=>{
  divide();
})


function multiply(){
  //collect the  string numbers:
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //split the text num with a comma:
  //Initially, we have empty strings like this''; If you click button 1, we have '' + '1'; if you click button 2, we have '1' + '2' = 12, if you click button 3, we have '12' + '3', we have 123.
  let num_split = first_num.split(',');

  //check if the user entered two numbers:
  if(num_split.length !==2){
    document.querySelector('.js-result').value = 'Please enter two numbers';
    return;
  }

  //convert the string numbers to actual numbers and use trim to remove spaces:
  let num1 = parseFloat(num_split[0].trim());
  let num2 = parseFloat(num_split[1].trim());

  //check if the user entered two numbers
  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter actual two numbers:';
    return;
  }

  //multiply the two numbers:
  let mult = num1 * num2;
  document.querySelector('.js-result').value = `${mult}`;

  //const first_num = document.querySelector('.js-num1');
  //const second_num = document.querySelector('.js-num2');
  //let first = first_num.value;
  //let second = second_num.value;
  //const total_value1 = Number(first);
  //const total_value2 = Number(second);
  //let total = total_value1 * total_value2
  document.querySelector('.js-result').value = `${total}`;
}
document.querySelector('.js-multiply').addEventListener('click', ()=>{
  multiply();
});


let resetValue = 0;
function resetCalculator(){
  let first_reset= document.querySelector('.js-num1');
  first_reset.value = [];
  
  localStorage.setItem('resetValue', JSON.stringify(resetValue));

  document.querySelector('.js-result').value = JSON.parse(localStorage.getItem('resetValue'));
}
document.querySelector('.js-reset').addEventListener('click', ()=>{
  resetCalculator();
});


function sinCalculation(){
  //collect the  string numbers:
  let first_num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //split the text num with a comma:
  //Initially, we have empty strings like this''; If you click button 1, we have '' + '1'; if you click button 2, we have '1' + '2' = 12, if you click button 3, we have '12' + '3', we have 123.
  let num_split = first_num.split(',');

  //check if the user entered two numbers:
  if(num_split.length !==2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma!';
    return;
  }

  //convert the string numbers to actual numbers and use trim to remove spaces:
  let degrees = parseFloat(num_split[0].trim());
  let hypotenuse = parseFloat(num_split[1].trim());

  //check if the user entered two numbers
  if(isNaN(degrees) || isNaN(hypotenuse)){
    document.querySelector('.js-result').value = 'Please enter actual one number:';
    return;
  }

  //get the sin of the two numbers:
  let sinTotal = degrees * Math.PI/180 ;
  let sin0 = Math.sin(sinTotal).toFixed(4);
  document.querySelector('.js-result').value = `${sin0} radians`;
}
document.querySelector('.js-sin').addEventListener('click', ()=>{
  sinCalculation();
});


function cosCalculation(){
  //get the input values:
  let inputVal = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //separate the two values with a comma:
  //Initially, we have empty strings like this''; If you click button 1, we have '' + '1'; if you click button 2, we have '1' + '2' = 12, if you click button 3, we have '12' + '3', we have 123.
  let inputValueSplit = inputVal.split(',');

  //check if the user enters two string values:
  if(inputValueSplit.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated with a comma';
    return;
  }

  //convert the two string numbers to actual numbers:
  let degrees = parseFloat(inputValueSplit[0].trim());
  let hypotenuse = parseFloat(inputValueSplit[1].trim());

  //check if the user enters valid numbers:
  if(isNaN(degrees) || isNaN(hypotenuse)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers';
    return;
  }

  //perform calculation:
  let cosTotal = degrees * Math.PI/180;
  let cos0 = Math.cos(cosTotal).toFixed(4);
  document.querySelector('.js-result').value = `${cos0} radians`;
}
document.querySelector('.js-cos').addEventListener('click', ()=>{
  cosCalculation();
});


function tanCalculation(){
  //get the input values:
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];

  //split the two numbers:
  let numSplit = firstNum.split(',');

  //check if the user enters two string numbers:
  if(numSplit.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers';
    return;
  }

  //convert the string numbers to actual numbers:
  let degrees = parseFloat(numSplit[0].trim());
  let adjacent = parseFloat(numSplit[1].split());

  //check if the user enters valid numbers:
  if(isNaN(degrees) || isNaN(adjacent)){
    document.querySelector('.js-result').value = 'Please enter valid numbers';
    return;
  }

  //perform calculation:
  let tanTotal = degrees * Math.PI/180;
  let tan0 = Math.tan(tanTotal).toFixed(4);
  document.querySelector('.js-result').value = `${tan0} radians`;
}
document.querySelector('.js-tan').addEventListener('click',()=>{
  tanCalculation();
});


function asinCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let splitNum = firstNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let radians = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  if(isNaN(radians) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers';
    return;
  }

  let asin0 = (Math.asin(radians) * 180/Math.PI).toFixed(0);
  if(isNaN(asin0)){
    document.querySelector('.js-result').value = "Error: can't perform an integer!parameters out of range";
    return;
  }else{
    document.querySelector('.js-result').value = `${asin0} degrees`;
  }
}
document.querySelector('.js-asine').addEventListener('click', ()=>{
  asinCalculation();
});


function acosCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let splitNum = firstNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let radians = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  if(isNaN(radians) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers';
    return;
  }

  let acosTotal = radians;
  let acos0 = (Math.acos(acosTotal) * 180/Math.PI).toFixed(0);
  if(isNaN(acos0)){
    document.querySelector('.js-result').value = "Error: can't perform an integer!parameters out of range";
    return;

  }else{
   document.querySelector('.js-result').value = `${acos0} degrees`;
  }
}
document.querySelector('.js-acose').addEventListener('click', ()=>{
  acosCalculation();
});

function atanCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let splitNum = firstNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let radians = parseFloat(splitNum[0].trim());
  let num2 = parseFloat(splitNum[1].trim());

  if(isNaN(radians) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers';
    return;
  }

  let atanTotal = radians;
  let atan0 = (Math.atan(atanTotal) * 180/Math.PI).toFixed(0);
  document.querySelector('.js-result').value = `${atan0} degrees`;
}
document.querySelector('.js-atan').addEventListener('click', ()=>{
  atanCalculation();
});


function expCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let splitNum = firstNum.split(',');
  if(splitNum.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let exponential = parseFloat(splitNum[0].trim());
  let base = parseFloat(splitNum[1].trim());

  if(isNaN(exponential) || isNaN(base)){
    document.querySelector('.js-result').value = 'Please enter two valid numbers';
    return;
  }

  let exp = exponential.toExponential();
  document.querySelector('.js-result').value = `${exp}`;
}
document.querySelector('.js-exp').addEventListener('click',()=>{
  expCalculation();
});


function squareCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let squareSplit = firstNum.split(',');

  if(squareSplit.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
   return;
  }

  let num1 = parseFloat(squareSplit[0].trim());
  let num2 = parseFloat(squareSplit[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter two valid nums separated by a comma';
    return;
  }

  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else if(num1 === num2){
    let totalNum = Math.sqrt(num1);
    document.querySelector('.js-result').value = `${totalNum}`;
    return;
  }else if(num1 !== num2){
    let totalNum = Math.sqrt(num1/num2).toFixed(4);
    document.querySelector('.js-result').value = `${totalNum}`;
    return;
  }
}
document.querySelector('.js-square').addEventListener('click', ()=>{
  squareCalculation();
});


function xRaiseToPower(){
  let num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let numSplit = num.split(',');

  if(numSplit.length !== 2){
    document.querySelector('.js-result').value = 'Please enter two numbers separated by a comma';
    return;
  }

  let num1 = parseFloat(numSplit[0].trim());
  let num2 = parseFloat(numSplit[1].trim());

  if(isNaN(num1) || isNaN(num2)){
    document.querySelector('.js-result').value = 'Please enter valid numbers';
    return;
  }

  let raisePower = Math.pow(num1,num2);
  document.querySelector('.js-result').value = `${raisePower}`;
}
document.querySelector('.js-raise-power').addEventListener('click', ()=>{
  xRaiseToPower();
});


function logBaseTenCalculation(){
  let num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
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
    let totalNum = Math.log10(num1).toFixed(4);
    document.querySelector('.js-result').value = `${totalNum}`;
    return;
  }else if(num1 !== num2){
    let totalNum = num1/num2;
    let logResult = Math.log10(totalNum).toFixed(4);
    document.querySelector('.js-result').value = `${logResult}`;
    return;
  }
}
document.querySelector('.js-logarithm').addEventListener('click',()=>{
  logBaseTenCalculation();
});


function logBaseTwoCalculation(){
  let num = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
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


function lnCalculation(){
  let firstNum = document.querySelector('.js-num1').value;
  document.querySelector('.js-num1').value = [];
  let numSplit = firstNum.split(',');

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
    document.querySelector('.js-result').value = 'Error: Parameters out of range';
    return;
  }
  if(num2 === 0){
    document.querySelector('.js-result').value = 'Error: Division by zero';
    return;
  }else if(num1 === num2){
    let totalNum = Math.LN2(num1).toFixed(4);
    document.querySelector('.js-result').value = `${totalNum}`;
    return;
  }else if(num1 !== num2){
    let totalNum = num1/num2;
    let logResult = Math.LN2(totalNum).toFixed(4);
    document.querySelector('.js-result').value = `${logResult}`;
    return;
  }
}
document.querySelector('.js-natural-log').addEventListener('click',()=>{
  lnCalculation();
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
  document.querySelector('.js-num1').value = [];
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
    let totalE = Math.pow(num1,1/num2).toFixed(3);
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }else if(num1 !== num2){
    let totalE = (Math.pow(num2,1/num1)).toFixed(3);
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
  }else if(num1 !== num2){
    let totalE = num1 % num2;
    document.querySelector('.js-result').value = `${totalE}`;
    return;
  }
}
document.querySelector('.js-module').addEventListener('click',()=>{
  modulus();
  document.querySelector('.js-num1').value = [];
});