//steps
//1.define and export a plantSeeds function 
//2. The function must accept the year's planting plan yearlyPlan as input (i.e. it must define a parameter).
//3.The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
//4. invoke seed functions
//5. Take that seed and add it to the array of plants in the field module.

import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// define and export a function 
export const plantSeeds = (plan) => {
    for (let i = 0; i < plan.length; i++) { //loops through parent array
       for (let j = 0; j < plan[i].length; j++) { //loops through each seperate child array
           console.log(plan[i][j]) //console log is a dev tool to see it working
           if (plan[i][j] === 'Potato') { //plan [i][j] is each item in each nested array
                //create the potato seed
                const potatoSeed = createPotato() //invoke function
                //sow potato seed by invoking appPlant and adding potatoSeed as argument
                addPlant(potatoSeed)
           }
           if (plan[i][j] === 'Corn') {
               const cornSeed = createCorn()
               addPlant(cornSeed)
           }
           if (plan[i][j] === 'Asparagus') {
               const asparagusSeed = createAsparagus
               addPlant(asparagusSeed)
           }
           if (plan[i][j] === 'Soybean'){
                const soybeanSeed = createSoybean
                addPlant(soybeanSeed)
          }
          if (plan[i][j] === 'Sunflower'){
              const sunflowerSeed = createSunflower
              addPlant(sunflowerSeed)
          }
          if (plan[i][j] === 'Wheat') {
              const wheatSeed = createWheat
              addPlant(wheatSeed)
          }
    }
}
}

