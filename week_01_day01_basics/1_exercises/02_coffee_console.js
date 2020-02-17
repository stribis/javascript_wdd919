/*
  Objective:
  Recreate the coffee machine example using with the console.log command
*/


// Lets set our variables
// Lets pretend that we have 22 units of beans and 32 of water
var beans = 22;
var water = 32;
// Lets also use the boolean 'true' to state that the machine is pluged in to the wall
var electricity = true;



// First we test if we have electricity. ( This is the same as writing: electricity == true)
if (electricity) {
  // If we come to this part of our statement, electricity has to be true, now
  // we can test if there is enough water. Lets say the minimum is 30 units
  if (water >= 30) {
    // Since water is set to 32, this statement is true
    // lets do the same with the beans
    if (beans >= 20){
      // Since beans is set to 22, this statement is true cause 22 is more the 20
      // We can now make the coffee
      console.log('Making coffee');
    } else {
      // This will only trigger if the beans condition is false
      console.log('Please refill beans');
    }
  } else {
    // This will only trigger if the water condition is false
    console.log('Please refill water');
  }

} else {
  // This will only trigger if the machine is not connected to the outlet
  console.log('Machine is not connected to the outlet');
}


