/*let matwiy = ["Matwiy", 14, "matwiy@gmail.com"]
let sergiy = ["Sergiy", 21, "sergiy@gmail.com"]

function printPerson(username, age, email){
    console.log("Name:", username)
    console.log("Age:", age)
    console.log("Email:", email)
    console.log("=======================")
}

printPerson(...matwiy)
printPerson(...sergiy)
*/

/*function sum(x = 8, y = 10) {
  const u = x + y;
  console.log(z);
}

sum()
sum(2)
sum(9 , 1)
*/

/*function sum(x = 8, y = 10 + x){
    const u  = x + y
    console.log(u)
}
sum()
sum(6)
*/

/*function sum(a, b, c){
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
 
    let result = 0;
    for(const n of arguments) 
        result += n;
    console.log("result =", result);
}
sum(6, 4, 5, 8)     // 23
*/

/*function sum(nums){
  let result = 0

  if(arguments.length >= 1){
    result = result + arguments[0]
  }
  
  if(arguments.length >= 2){
    result = result + arguments[1]
  }

  console.log("result =", result)
}

sum(6)
sum(6, 5)
sum(6,5,4)
*/

/*function sum(a, b) {
  return a + b
}

let num1 = sum(2, 8)
console.log(num1)

let num2 = sum(56, 4)
console.log(num2)
*/

/*function rectangle(width, height){
  let perimeter = width *2 + height *2
  let area = width + height

  return[perimeter, area]
}

let rectangleData = rectangle(20, 30)

console.log(rectangleData[0]);
console.log(rectangleData[1]);
*/

/*function rectangle(width, height){
  const rectPerimeter = width *2 + height *2
  const rectArea = width + height

  return {
    perimeter: rectPerimeter,
    area: rectArea
  }
}

const rectangleData = rectangle(20, 30)

console.log("Perimeter:", rectangleData.perimeter);
console.log("Area", rectangleData.area);
*/

/*function menu(n){

   if (n === 1) return function(x, y){return x + y}
   else if (n === 2) return function(x, y){return x - y}
   else if (n === 3) return function(x, y){return x * y}
   return function(){ return 0}
}

const action = menu(1)
const result = action(2, 5)

console.log(result);
*/
    
/*function menu(n){
   if (n == 1) return function(x, y){return x + y}
   else if (n == 2) return function(x, y){return x - y}
   else if (n == 3) return function(x, y){return x * y}
   return function(){ return 0}
}

let action = menu(1)
console.log(action(2, 5));

action = menu(2)
console.log(action(2, 5));

action = menu(3)
console.log(action(2, 5));

action = menu(190)
console.log(action(5, 4));
*/

// Стрілочні функції

/*const hello = (mes) => console.log(mes)


console.log("==============================");
hello("Hello! im learning JavaScript!")
console.log("==============================");
hello("Hi Sergiy is my favorite coach <3")
console.log("==============================");
*/

/*const sum = (x, y) => console.log("Sum:", x + y);

sum(46, 4)
sum(3, 4)
sum(2, 2)
*/

/*const hi = (name) => `Hello, ${name}`

console.log(hi("Matiwy"));
console.log(hi("Sergiy"));
console.log(hi("Stas Kuka"));
*/

/*const user = (userName, userText, userAge) => ({name: userName, text: userText, age: userAge})

let matwiy = user("Matwiy,", "he is:", 14)
let stas = user("Stas,", "he is:", 19)

console.log(matwiy.name, matwiy.text, matwiy.age);
console.log(stas.name, stas.text, stas.age);
*/

 
/*const square = (n) => {
    const result = n * n
    console.log(result)
}

square(5, 6)
square(3, 2)
*/

// IIFE



