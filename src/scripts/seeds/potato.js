//1. in each seed module, define a function 
//2. each function will return an object with these properties ... type, height, output
// 3. import function to main.js
//4. invoke function in main
//5. console log it in main

export const createPotato = () => { //dont forget to export
    const potatoObj = {
        type: 'Potato',
        height: 32,
        output: 2
    }
    return potatoObj            //dont forget to return, since we want an output
}