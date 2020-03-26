// Code for the todo list
// This array will contain all our todo items and their corresponding properties
let todo = [{objective: 'Take out the loundry', status: false}, {objective: 'Smile', status: true}]

// Click event listener for our add button which will call the addTodo function
document.querySelector('#obj').addEventListener('click', e => {
  addTodo()
})

// lets call displayTodo when the page load to show the todolist in the html
displayToDo()

// This function is reponsible for manipulating the DOM for the Todo list
function displayToDo () {
  // Reset the list 
  document.querySelector('.wrapper').innerHTML = ''
  // Iterate through our todo array
  // The second parameter in a forEach always gives us our current iteration count
  todo.forEach((item, i) => {
    // create a div and save it in the variable wrapper
    let wrapper = document.createElement('div')
    // create an onclick event attribute in the created element which will call the deltePoint() function with it's corresponding position
    wrapper.setAttribute('onclick', 'deletePoint('+ i +')')
    // create the elements for the text and the trash can icon
    let objective = document.createElement('p')
    let statusBox = document.createElement('i')
    // insert the text in the created element
    objective.innerHTML = item.objective
    // and the trash class for our Font-Awesome icon
    statusBox.setAttribute('class', 'fas fa-trash')
    // insert them in our div
    wrapper.appendChild(objective)
    wrapper.appendChild(statusBox)
    // insert our div in the page
    document.querySelector('.wrapper').appendChild(wrapper)
  });
}

// this function is called by the onclick attributes in each item
function deletePoint(n){
  // we will just spice the array to delete one item at the corresponding index
  todo.splice(n, 1)
  // display our changes
  displayToDo()
}

// this function will add a todo to our array using the value from our input
function addTodo(){
  // Get the current input value
  let obj = document.querySelector('#inputObj').value
  // start some validation (we just check if the length is at least 4)
  if( obj.length > 3){
    // create and push an object with the inputed text
    todo.push({objective: obj, status: false})
    // reset the value of the input which no longer needs to be there
    document.querySelector('#inputObj').value = ''
    // display our changes
    displayToDo()
  }else{
    alert('Your item is too short')
  }
  
}