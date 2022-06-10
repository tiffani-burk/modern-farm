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
       let seedObjects = []
       for (plant of plantsArray) {
              //unknown number of objects
              let numberOfObjects = ''
              //corn is going to be cut in half
              if (plant.type === 'Corn') {
                     numberOfObjects = plant.output / 2
              }
              else {
                     numberOfObjects = plant.output
              }
              //nested for loop 
              for (let i = 0; i < numberOfObjects; i++)
              //push plant to the empty seedObject array
              seedObjects.push(plant)
       }
       return seedObjects
}      