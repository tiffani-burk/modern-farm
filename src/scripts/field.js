//Steps
//1. Define a variable set to an empty array
//2. Define a function named addPlant 
//3. Export the function 
// 4. import a seed objects v v
// The addPlant function must accept a seed object as input. The function will add the seed to the field 
// (How do you add something to an array? Do you remember the method for it?).
//5. Define and export a funciton named usePlants (returns a copy of the array of plants)
//6. Array.isArray method on corn

//import all seed object functions 
import { createPotato } from './seeds/potato.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createWheat } from './seeds/wheat.js'
import { createSunflower } from './seeds/sunflower.js'
import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'
import { plantSeeds } from './tractor.js'



//var that is going to store all the plants growing in the field
let plantsInField = [] 

//Goal of this funtion: to add the seed to the field
//exporting a function 
export const addPlant = (seedObj) => {
    //push seedObj to empty array above
    plantsInField.push(seedObj)
}


//invoke createPotato function
// const potatoSeed = createPotato()
// //pushing potatoSeed to plantsInField array
// plantsInField.push (potatoSeed)

// //invoke 
// const asparagusSeed = createAsparagus()
// //push
// plantsInField.push(asparagusSeed)

// //invoke
// const wheatSeed = createWheat()
// //push
// plantsInField.push(wheatSeed)

// //invoke
// const sunflowerSeed = createSunflower()
// //push
// plantsInField.push(sunflowerSeed)

// //invoke 
// const soybeanSeed = createSoybean()
// //push
// plantsInField.push(soybeanSeed)

// const cornSeed = createCorn()
// //push
// plantsInField.push(cornSeed)
// }



//exported function that will return a copy of the array plantsInField
export const usePlants = () => {
    const copyOfPlantsinField = [...plantsInField]
    return copyOfPlantsinField
}