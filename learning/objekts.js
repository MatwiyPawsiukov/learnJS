// const user = new Object() - Це в нас конструктор

/*const user = {
    name: "Matwiy",
    coach: "Sergiy"
}
user.age

console.log(user.age, user.name);
*/ // Так тоже можна

/*const user = {} - Але я би так не робив 
user.name = "matwiy"
user.age = 14
*/

/*const name = "Matwiy"
const age = 14
const user = {name, age}

console.log(user.name, "he is", user.age);
*/

/*const name = "Matwiy"
const age = 14
const user = {name, age}

const teacher = {user, course: "JavaScript"}
console.log(teacher.user);
console.log(teacher.course);
*/

/*const user = {
    name: "Matwiy",
    age: 14, 
    display(){
        console.log(this.name, this.age);
        
    },
    move(place){
        console.log(this.name, "goes to", place);
        
    }
}


user.display()
user.move("the shop")
*/

/*const user = {} // то все синтаксиси я в а#!ї
user["name"] = "Matwiy"
user["age"] = 14
user["display"] = function(){
    console.log(user.name, user.age);
    
}

user["display"]()
*/

/*const user = { // ACUH SHCEIß SYNTAKSIS
    ["name"]: "Matwiy",
    ["age"]:  14,
    ["display"]:  function(){
        console.log(user.name, user.age);
    }
}

user["display"]()
*/

/*const user = { // auch
    "name": "Matwiy",
    "age": 14,
    "display": function(){
        console.log(user.name, user.age);
        
    }
}
user.display()
*/

/*const user = {
  // Das brauche ich auf jeden fall noch!!!!!!!!!!!!!!!!!!!!!
  name: "Matiwy",
  age: 14,
  "full name": "Matiwy Pawsiukow",

  "display info": function () {
    console.log(user.name, user.age);
  },
};

console.log(user["full name"]);
user["display info"]();
*/


