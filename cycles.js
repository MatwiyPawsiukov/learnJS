/*for(let i = 0; i < 100; i+=2){
    console.log(i)
}
*/

/*for(let i = 0; i < 60;){
    console.log(i);
    i = i + 10
}
 */

/*const people = ["Matwiy",  "Sergiy", "Stas"]

for(let i = 0; i < 3; i++){

    console.log(people[i]);
}
*/

/*function itt(){
for(let i = 1, j = 1; i < 5, j < 4; i++, j++){
    console.log(i + j);
    }
}
itt()
*/

/*for(let i = 0; i < 5; console.log(i++))
    console.log("end");
*/

/*let i = 0

for(console.log("init"); i < 5; i++){
    console.log(i);
}
*/

// TREBA POYASNENYA!!!!!!!

/*for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i * j);
  }
}
*/

/*const people = [["Matwiy", 14], ["Sergiy", 21], ["Stas", 19]]

for(let i = 0; i < 3; i++){
    
    for(let j = 0; j < 2; j++){
        console.log(people[i][j])
    }
    console.log("=======");
    
}
    */

/*while(i <=5){
    console.log(i)
    i++
}\*/

/*let i = 0

do{
    console.log(i)
    i++
}while(i <= 5)*/

/*for (i = 1; i < 6; i++) {
  if (i === 4) break;

  console.log(i);
}
console.log("ggs man");
*/

/*const person = {
    name: "Matwiy",
    age: 14,
    city: "Gräfenthal"

}
    


for (let prop in person){

    console.log(prop, ":", person[prop]);
    
}
*/

let text = "Hello"

for(leters of text){
    console.log(leters)
}

let people = ["Matwiy", "Sergiy", "Stas", 2]

for(persons of people){
    console.log(persons);
    
}