/*function outer(){
    let x = 5

    function inner(){
        x++
        console.log(x)
    }
    return inner
}

const fn1 = outer()
const fn2 = outer()

fn1()
fn2()
fn1()
fn2()
fn1()
fn2()
*/

//треба пояснення

/*function multiply(n){
    let x = n

    return function(m){
        return x * m
    } 
}

const fn1 = multiply(5)
const result1 = fn1(6)
const fn2 = multiply(4)
const result2 = fn2(6)

console.log(result1);
console.log(result2);
*/

/*function person(name, age) {
  console.log("Person", name, "created");

  function print() {
    console.log("Person", name, " (" + age + ")");
  }
  function work() {
    console.log("Person", name, "works");
  }
  function incrementAge(value) {
    age = age + value;
  }

  return [print, work, incrementAge];
}

const tom = person("Matwiy", 14)

tom[0]();    
tom[1]();       
tom[2](1);      
tom[0]();
*/

