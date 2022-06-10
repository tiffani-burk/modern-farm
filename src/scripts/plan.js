//steps
//1. go to main and import and invoke the createPlan function
//2. store value in a var called yearlyPlan and return it
//3. console log

//array
const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]


//Goal of this function: to return an array of randomized plants.

//exported function
export const createPlan = () => {
    const plan = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}





/*
    This is a generator function used to randomly
    generate crop types to plant in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

