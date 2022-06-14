//Harvesting the Plants

//steps
//1. define and export harvestPlants function 
//2. the function must accept plants array as input 
//3. the function will return an array of seed objects
//4. iterate through the array of growing plants.
// ^on each plant, get the value of the output property
//5. add that amount of plant objects to the array the function returns
//6. Corn exception: half the output of each corn plant will be added to the array



//Goal of this function will be to harvest the seeds
//the output equals the number of plant seed odjects this function produces

export const harvestPlants = (plantsArray) => {
       let harvested = []
       for (const plant of plantsArray) { //declare plant as variable with "const"
              //unknown number of objects
              let numberOfObjects = 0
              //corn is going to be cut in half
              if (plant.type === 'Corn') {
                     numberOfObjects = plant.output / 2
              }
              else {
                     numberOfObjects = plant.output
              }
              //nested for loop to loop specified number of times, based on value of plant output
              for (let i = 0; i < numberOfObjects; i++) {
                     //push plant to the empty seedObject array
                     harvested.push(plant)
              }
       }
       return harvested
}       