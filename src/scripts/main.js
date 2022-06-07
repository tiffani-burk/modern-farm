// In this project, you will be practicing the following skills.

// Declaring variables with let and const.
// Writing functions.
// Function parameters and arguments.
// Iteration with for loops and/or forEach array methods.
// Modular development to enforce the Single Responsibiity Principle to your code.
// Using import and export keywords between modules.
// Conditional logic using if and else.

console.log("Welcome to the main module")

//import the createPlan function 
import {createPlan} from './plan.js' 

const yearlyPlan = createPlan() //invoking the function

console.log(yearlyPlan)

//import seed functions 
import { createAsparagus } from './seeds/asparagus.js'

//invoke asparagus function
const asparagusSeed = createAsparagus()

//console log the new variable
console.log(asparagusSeed)

//import potato func
import { createPotato } from './seeds/potato.js'

//invoke it
const potatoSeed = createPotato()

//console log
console.log(potatoSeed)

//import wheat function 
import { createWheat } from './seeds/wheat.js'

//invoke function 
const wheatSeed = createWheat()

//console log var
console.log(wheatSeed)

//import sunfloer function 
import {createSunflower} from './seeds/sunflower.js'

//invoke function 
const sunFlowerSeeds = createSunflower()

//console log
console.log(sunFlowerSeeds)

//import soybean function 
import { createSoybean } from './seeds/soybean.js'

//invoke it 
const soySeed = createSoybean()

//console log variable
console.log(soySeed)


//  imoport corn function
import { createCorn } from './seeds/corn.js'

//invoke corn function 

//console log corn var