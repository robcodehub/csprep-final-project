//prompt for keyword
let ask = prompt("What would u like to do today?");
//when prompted invoke that function
if(ask == 'multiply'){
  multiply()
}else if(ask == 'divide'){
  divide()
}else if(ask == 'add'){
  add()
}else if(ask == 'minus'){
  minus()
}else{
 console.log("Please choose one of following: multiply, divide, add or minus")
}

//convert into lowercase
ask.toLowerCase();

//functions
function multiply(num1, num2){
  let val1 = prompt("Enter value to multiply")
  let val2 = prompt("Enter value to multiply with " + val1)
  return val1 * val2;
}
function divide(num1, num2){
  let val1 = prompt("Enter value to divide")
  let val2 = prompt("Enter value to divide with " + val1)
  return val1 / val2;
}
function add(num1, num2){
  let val1 = prompt("Enter value to add")
  let val2 = prompt("Enter value to add with " + val1)
  return val1 + val2;
}
function minus(num1, num2){
  let val1 = prompt("Enter value to minus")
  let val2 = prompt("Enter value to minus with " + val1)
  return val1 - val2;
}

//TODO - Make it DRY