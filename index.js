//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein= ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetables = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let drinks= ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let fruits= ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
for(i=0;i<6;i++){
       console.log("Lunch menu for astronaut "+(i+1));
      console.log(protein[i]+" "+grains[i]+" "+vegetables[i]+" "+drinks[i]+" "+fruits[i]+" "+desserts[i]);

}
//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
// This is gvng some error
const input = require('readline-sync');


//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
str = protein.substring(3,6);
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”
