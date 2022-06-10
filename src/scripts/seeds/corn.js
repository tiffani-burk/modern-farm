//1. define a function 
//2. function will return an array with 2 identicle objects in it.
//3. import it to main.js 
//3. invoke function in main
//4. console log it in main

//Goal of this function is to return an array with two 
//identical objects holding type, height and output

export const createCorn = () => {
    const cornArray = [
        { 
            type: 'Corn',
            height: 180,
            output: 6
        },
        { 
            type: 'Corn',
            height: 180,
            output: 6
        }
    ]
   return cornArray
}

//make sure it loops through corn array 