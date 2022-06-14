// In this project, you will be practicing the following skills.

// Declaring variables with let and const.
// Writing functions.
// Function parameters and arguments.
// Iteration with for loops and/or forEach array methods.
// Modular development to enforce the Single Responsibiity Principle to your code.
// Using import and export keywords between modules.
// Conditional logic using if and else.

console.log("Welcome to the main module")

//imports
import { createPlan } from './plan.js'
import { harvestPlants } from './harvester.js'
import { plantCatalog } from './catalog.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'


const yearlyPlan = createPlan() //invoking the function

console.log("yearlyPlan", yearlyPlan)
 
//invoke plant seeds and pass it yearlyPlan
plantSeeds(yearlyPlan)


//invoked usePlants and set = to plantCopy var
const plantsInTheField = usePlants()
//console.log
console.log( "plantCopy", plantsInTheField)

//invoke harvestPLants
const plants = harvestPlants(plantsInTheField)

console.log("plants", plants)

//Invoke plantCatelog and pass it the plant array as argument, then console log it. 
const varialbleOfPlantCatelog = plantCatalog(plants)
console.log("varialbleOfPlantCatelog", varialbleOfPlantCatelog)

//variable is storing queryselector for HTML section to input JS automation of plants
let parentHTMLElement = document.querySelector('.plant-list')
//storing my HTML rep of all plant catelog to this variable
parentHTMLElement.innerHTML = varialbleOfPlantCatelog

