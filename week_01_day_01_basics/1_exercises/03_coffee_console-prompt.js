// Same basic principle as with the coffee machine using the console.log
// However this time we use prompts, confirms and alerts to gather user inputs

var beans = prompt('How many beans?');
// min 20
var water = prompt('How much water?');
// min 30
var electricity = confirm('Is the machine connected?');

if (electricity === true) {
  // has elect.
  if (water >= 30) {
    // enough water
    if (beans >= 20){
      //enough beans
      alert('Making coffee');
    } else {
      alert('Please refill beans');
    }
  } else {
    // has no water
    alert('Please refill water');
  }

}


