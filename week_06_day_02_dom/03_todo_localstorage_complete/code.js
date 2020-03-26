// Create new array for our todo list
// Each todo list item will be included in this array as an object with 2 properties, one for text and another one for the status
let todoList = new Array

getTodos()

// get todos from the localStorage if there are none present and run popList to populate the list
function getTodos () {
  // If there are todos in storage :
  if (localStorage.getItem('todos')){
    console.log('there is stuff in local storage')
    // Save parse the string into an usable object and save it in todoList
    todoList = JSON.parse(localStorage.getItem('todos'))
    // Populate the list with the storage data
    popList()
    return
  }else{
    // If NO todos in storage - continue
    return 'You do not have any todos \nclick the "+" button to add more'
  }
}

function addTodo(){
  // Only add a todo if there is a value in the input
  const newTodo = document.querySelector('#addinput').value
    if(newTodo){
      // create an object with the input value as text
      // and a default of not checked
      const todoObj = {
        text : newTodo,
        complete : false 
      }
      // add the todo to the list
      todoList.push(todoObj)
      // overwrite the list in the storage
      localStorage.setItem('todos', JSON.stringify(todoList))
      // run the populate list function
      popList()
      
    }else{
      // display error cause empty
      // TODO: display this error for user
      return 'You must write something in the box'
    }
  
}

// Populates the list in the HTML
function popList () {
  // Delete the current list 
  const list = document.querySelector('#list')
  list.innerHTML = ''
  // Create a new item in the list for every item in the todoList array
  if (todoList){
    todoList.forEach(todo =>{
      const condition = todo.complete
      todoWrapper = document.createElement('div')
      todoWrapper.classList.add('todoWrapper')
      // for the condition, we only want to add a clas if it is false, if it is true we dont add an additional class
      todoWrapper.innerHTML = `
      <div class="todoText">${todo.text}</div>
      <div class="todoCheck ${condition == false ? 'false': ''}"></div>
      `
      list.appendChild(todoWrapper)
      updateLine()
      return
    })
} 
  // We call update boxes here because we want our query selector to select the newly created boxes too
  updateBoxes()
}

// if a box is clicked, update the information of the list and display it in the page
// This function is executed every time the list is populated, in order to get the new boxes
function updateBoxes () {
  let boxes = document.querySelectorAll('.todoCheck')
  boxes.forEach((box, i) => {
    box.addEventListener('click', e => {
      // toggle the false class on and off
      /**
       * NOTE!!*
       * 
       * A checkbox (.todoCheck) with the class 'false'
       * will have a Square SVG WITHOUT a check in it
       * 
       * A checkbox (.todoCheck) withOUT the class 'false'
       * will have a Square SVG WITH a check in it
       * 
       * Check the CSS lines 75 & 82 and this will make more sense! 
       * 
       * **/

      box.classList.toggle('false')
      if(box.classList.contains('false')){
        // this box should be set to false in the array
        todoList[i].complete = false
      }else{
        // this box should be set to true in the array
        todoList[i].complete = true
      }
      // update localStorage as well (not only the array)
      localStorage.setItem('todos', JSON.stringify(todoList))
      updateLine()
    })
  })

  return
}

// This function will get the corresponding text of every checked box and strike it though
function updateLine() {
  //get boxes
  let boxes = document.querySelectorAll('.todoCheck')
  boxes.forEach(box => {
    if(!box.classList.contains('false')){
      // if the box doesn't contain the false class
      // add the class 'marked' to the parent element
      box.parentElement.classList.add('marked')
    }else if (box.classList.contains('false')) {
      // if the box contains the false class
      // add the remove 'marked' to the parent element
      box.parentElement.classList.remove('marked')
    }
  })
  return
}

// if addButton (+) is clicked then run addTodo and reset the value of the input field
document.querySelector('#addButton').addEventListener('click', e=>{
  // prevent default is necessary because the button is inside a form.
  // we do not want to reload the page
  e.preventDefault()
  addTodo()
  // reset the input value to make it more user friendly
  document.querySelector('input').value = ''
})

// if markAll is clicked then remove the false class from all the list items and update the list and localstorage
document.querySelector('#markAllCompleted').addEventListener('click', e=>{
  e.preventDefault()
  let boxes = document.querySelectorAll('.todoCheck')
  boxes.forEach((box, i) => { 
    box.classList.remove('false')
    // this box should be set to true in the array
    todoList[i].complete = true
    // update the localStorage
    localStorage.setItem('todos', JSON.stringify(todoList))
    updateLine()
  })
  
})

// if clear all is clicked then update the array and localStorage and repopulate the list
document.querySelector('#clearCompleted').addEventListener('click', e=>{
  e.preventDefault()
  // selects all the todos that have their todo property set to false. Others are ignored, redefining the array
  todoList = todoList.filter(todo => todo.complete == false )  
  // update the localStorage
  localStorage.setItem('todos', JSON.stringify(todoList))
  popList()
})


