// Перевірка наявності та перебір методів та властивостей

const user = {}
user.name = "Matwiy"
user.age = 14
user.print = function(){
    console.log(this.name, this.age);
    
}

/*const hasNameProp = "name" in user // Або так 
console.log(hasNameProp);

const hasWeightProp = "weight" in user
console.log(hasWeightProp);

const hasAgeProp = "age" in user
console.log(hasAgeProp);

const hasPrintMethod = "print" in user
console.log(hasPrintMethod);
*/

/// the second one is goated not gonna lie to be honest

/*const hasNameProp = user.name !== undefined // Так навіть ліпше
console.log(hasNameProp); 
const hasWeightProp = user.weight !== undefined;
console.log(hasWeightProp);
*/

/*
const hasNameProp = user.hasOwnProperty("name")
console.log(hasNameProp);

const hasWeightProp = user.hasOwnProperty("weight")
console.log(hasWeightProp);
*/

// Циклом теж іде

const matwiy = {
    name: "Matwiy",
    age: 14,
    print(){
        console.log(`Name: ${this.name} Age: ${this.age} `);
    }
}

for(const prop in matwiy){
    console.log(prop, ":", matwiy[prop]);
    
}
