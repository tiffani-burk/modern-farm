//Creating a Seed Module

//1. in each seed module, define a function 
//2. each function will return an object with these properties ... type, height, output
// 3. import function to main.js
//4. invoke function in main
//5. console log it in main

//Goal of this function is to return an object with the type, height and output. 

export const createSoybean = () => {
    const soybeanObj = {
        type: 'Soybean',
        height: 20,
        output: 4
    }
    return soybeanObj
}