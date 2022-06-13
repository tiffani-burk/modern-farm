// In this project, you will be practicing the following skills.

// Declaring variables with let and const.
// Writing functions.
// Function parameters and arguments.
// Iteration with for loops and/or forEach array methods.
// Modular development to enforce the Single Responsibiity Principle to your code.
// Using import and export keywords between modules.
// Conditional logic using if and else.

console.log("Welcome to the main module")

//import and invoke createPlant function from plan.js
import { createPlan } from './plan.js'

const yearlyPlan = createPlan() //invoking the function

console.log("yearlyPlan", yearlyPlan)
 
//invoke plant seeds and pass it yearlyPlan
plantSeeds(yearlyPlan)

//import seed functions 
import { createAsparagus } from './seeds/asparagus.js'

//invoke asparagus function
const asparagusSeed = createAsparagus()

//console log the new variable
console.log("asparagusSeed", asparagusSeed) //can comment the name using  ""

//import potato func
import { createPotato } from './seeds/potato.js'

//invoke it
const potatoSeed = createPotato()

//console log
console.log( "potatoSeed", potatoSeed)

//import wheat function 
import { createWheat } from './seeds/wheat.js'

//invoke function 
const wheatSeed = createWheat()

//console log var
console.log( "wheatSeed", wheatSeed)

//import sunfloer function 
import {createSunflower} from './seeds/sunflower.js'

//invoke function 
const sunFlowerSeeds = createSunflower()

//console log
console.log("sunFlowerSeeds", sunFlowerSeeds)

//import soybean function 
import { createSoybean } from './seeds/soybean.js'

//invoke it 
const soySeed = createSoybean()

//console log variable
console.log("soySeed", soySeed)


//  imoport corn function
import { createCorn } from './seeds/corn.js'

//invoke corn function 
const cornSeed = createCorn() //capturing return value of createCorn in a var

//console log corn var
console.log("cornSeed", cornSeed)


//importing usePlants function into main
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'

//invoked usePlants and set = to plantCopy var
const plantsInField = usePlants()
//console.log
console.log( "plantCopy", plantsInField)

import { harvestPlants } from './harvester.js'

//invoke harvestPLants
const plants = harvestPlants(plantsInField)

console.log("plants", plants)


