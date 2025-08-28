/*function conv(ce){
  console.log("Цельсій;", ce)
  f = ce * 9 / 5 + 32
  console.log("Фрайгент:", f);
  
}

conv(3)
*/

/*const num1 = 2
const num2 = 5

const result = num1 + num2

console.log(result);
*/

/*const arr = [2, 4, 6, 8, 10]

for(nums of arr){
   let result = nums * 2
    console.log(result);
    
}
*/

/*let val = "1234"
let res = parseInt(val)

console.log(res + 10);
*/

/*const words = ["apple", "banana", "peach", "orange", "pinaple"]
let count = 0

for(const lett of words){
    if(lett.length > 5){
        count ++
    }
}

console.log("there were;", count);
*/

/*const numbers = [3, 7, 15, 2, 9, 20,]

let evenNumbers = []

for(const num of numbers){
    if(num % 2 !== 0){
        evenNumbers.push(num)
    }
}

console.log(evenNumbers);
*/

/*
function makeCounter(){
    let x = 5

    function inner(){
        x++
        console.log(x);
    }
    return inner
}

let counter = makeCounter()


counter()
counter()
counter()
counter()
counter()
*/

/*const arr = [2, 6, 78, 43, 17, 29, 61, 8, 19, 11]
let max = arr[0]

for(let nums of arr){
    if(nums > max ){
        
        max = nums
    }
}

console.log(max)
*/

/*function print(){
    console.log("Good morning <3");

    print =  function(){
        console.log("Have a good night bro <3");
    }
    
}
const printMassege = print

print()
print()
print()
printMassege()
printMassege()
*/

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " Парне");
  } else {
    console.log(i + " Not parne");
  }
}
