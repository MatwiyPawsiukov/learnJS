/*const country = {

    name: "Germany",
    language: "Deutsch",
    capital: {

        name: "Berlin",
        popultaiom: 3375000,
        "year of entsch": 1237
    }

}

console.log("Hauptstadt:", country.capital.name);
console.log("Popultaion", country.capital.popultaiom);
console.log("Entschtanden in:", country.capital["year of entsch"]);
*/

const country = {
    name: "Sweeden",
    languages: ["German", "Sweedish", "Italish"],
    capital: {

        name: "Bern",
        populasation: 123456
    },


    cities: [
        {name: "Cyrih", pop: 2466488907},
        {name: "Schenewa", pop: 724681324},
        {name: "Basel", pop: 4891237490185}
    ]
}

console.log("Haupt schparcen in Sweeden:");
for(const lang of country.languages){
    console.log(lang);
}

console.log(" ")

console.log("Städte in Sweeden and popialsation")
for(let city of country.cities){
    console.log(city.name, city.pop);
    
}

