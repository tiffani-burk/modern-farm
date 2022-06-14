//Creating a Seed Module

//1. in each seed module, define a function 
//2. each function will return an object with these properties ... type, height, output
// 3. import function to main.js
//4. invoke function in main
//5. console log it in main


//goal of this function is to create a seed

export const createAsparagus = () => {
    const plantProp = {
        type: 'Asparagus',
        height: 24,
        output: 4
    }
    return plantProp
} 

