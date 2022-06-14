//Selling the Harvest via Online Website

//1.Define and export a catalog function 
//2. Add a param for the harvested food array
//3. Use a for loop to iterate over the array of food objects 
//4. Create an HTML representaion on the food item 
//---- In main, invoke this function and pass it the array of food items to iterate through



//Use flexbox to wrap the rows of HTML represenated items

//The goal of this function is to iterate through each food array item and output 
//an HTML representation of that item

export const plantCatalog = (plantHarvestArray) => {
    //Create a variable to store the data from the harvestPlants function 
  
    //Buiding a string filled with HTML syntax
    let htmlString = '<section class="plant-list">'


    //Create HTML representation for each plant
    for (const plantItem of plantHarvestArray) {
    htmlString += `<div class="harvested-food">${plantItem.type}</div>`
}
    htmlString += `</section>`

    return htmlString 
}
