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

const words = ["apple", "banana", "peach", "orange", "pinaple"]
let count = 0

for(const lett of words){
    if(lett.length > 5){
        count ++
    }
}

console.log("there were;", count);

