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

const user = {
    name: "Matwiy",
    age: 14, 
    display: function(){
        console.log(this.name, this.age);
        
    }
}


user.display()
